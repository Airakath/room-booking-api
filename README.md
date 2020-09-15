# room-booking-api
API Rest Node.js | Application de réservation de chambre

## Commentaire
Vous trouverez dans le wiki le Quickstart pour une installation rapide du projet.
J'ai également mis à disposition un script permettant de rapidement générer des appartements et chambres en BDD.

Je vous souhaite un bon démarrage avec le projet

## Project

#### Version
Node: v12.18.1
npm: v6.14.7
mongoDB:v4.4.1

#### Endpoint

https://api.cake-room.org:3000


#### Documentation 

url d'accès à la documentation swagger

https://api.cake-room.org:3000/api/v1/api-docs/#/


## Tree
```
│   .env
│   .eslintrc
│   .gitignore
│   .prettierrc
│   db.js
│   ecosystem.config.js
│   package-lock.json
│   package.json
│   README.md
│   server.js
│
├───documents
│       room-booking.postman_collection.json
│
├───generator
│   │   generateData.js
│   │
│   └───apartment
│           FakeApartmentGenerator.js
│
├───src
│   ├───api
│   │   └───v1
│   │       │   router.js
│   │       │
│   │       ├───api-docs
│   │       │       swagger.json
│   │       │
│   │       └───components
│   │           ├───Apartment
│   │           │   │   ApartmentController.js
│   │           │   │   ApartmentRoutes.js
│   │           │   │
│   │           │   └───models
│   │           │           ApartmentModel.js
│   │           │
│   │           ├───Auth
│   │           │   │   AuthController.js
│   │           │   │   AuthRoutes.js
│   │           │   │
│   │           │   └───middlewares
│   │           │           passport.js
│   │           │
│   │           ├───Booking
│   │           │   │   BookingController.js
│   │           │   │   BookingRoutes.js
│   │           │   │
│   │           │   └───models
│   │           │           BookingModel.js
│   │           │
│   │           ├───Client
│   │           │   │   ClientController.js
│   │           │   │   ClientRoutes.js
│   │           │   │
│   │           │   └───models
│   │           │           ClientModel.js
│   │           │
│   │           └───Room
│   │               │   RoomController.js
│   │               │   RoomRoutes.js
│   │               │
│   │               └───models
│   │                       RoomModel.js
│   │
│   └───config
│           env.config.js
│
└───test
        connexion_test.js
        create-client_test.js
        delete-client_test.js
        read-client_test.js
        update-client_test.js
```

## Wiki

https://github.com/Airakath/room-booking-api/wiki


## Resources

##### Collections postman
import : documents/room-booking.postman_collection.json

