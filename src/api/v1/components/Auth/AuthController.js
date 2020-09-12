const config = require('src/config/env.config.js');
const Client = require('../Client/models/ClientModel');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('src/api/v1/components/Auth/middlewares/passport');
const { identifiantValidation } = require('src/config/validation');
const cryptoRandomString = require('crypto-random-string');


exports.signup = async (req, res) => {
    try {        
        const validatorSchema = identifiantValidation(req.body);
        if (validatorSchema.error) return res.status(400).json({
            error: {
                userMessage: validatorSchema.error.message,
                internalMessage: validatorSchema.error.message,
            }
        });       
        
        const userExist = await Client.findOne({ email: req.body.email });
        if (userExist) return res.status(400).json({
            error: {
                userMessage: "Un compte est déjà associé à cet email",
                internalMessage: "email already existe"
            }            
        });

        const user = new Client({
			email: req.body.email,
			password: req.body.password,
			authorization: { role: 'Customer' },
			accountConfirmation: {
				token: cryptoRandomString({ length: 64, type: 'url-safe' }),
				consume: false,
			},
		});

        const newClientCreated = await user.save();  
        if (!newClientCreated) return res.status(400).json({ 
            error: {
                userMessage: "Erreur lors de la sauvegarde du compte",
                internalMessage: "Error saving account"
            } 
        });
        
        res.status(201).json({
			success: {
				userMessage: 'Votre compte a bien été créé',
				internalMessage: 'Account created',
			},
		});

    } catch (err) {

        return res.status(400).json({ error: 'Internal server error' });
    }
}

exports.signin = (req, res, next) => {
    try {
        passport.authenticate('local', { session: false} , function(err, user, info) {
            if (err) return next(err);
            if (!user) return res.status(404).json({
                error: {
                    userMessage: "Identifiant ou mot de passe invalide",
                    internalMessage: "invalide email or password"
                }
            }); 

            return res.status(200).json({
                success: {
                    token: createToken(user)
                }
            }); 

        }) (req, res, next);
    } catch (err) {

        return res.status(400).json({ error: 'Internal server error' });
    }
}

function createToken(user) {
	const token = jwt.sign(
		{
			sub: user._id,
            iss: config.jwt_issuer,
            roles: [
                user.authorization.role,
            ]
		},
		config.jwt_key_secret,
		{
			algorithm: 'HS256',
			expiresIn: config.jwt_expiration,
		}
	);
	return token;
}