const config = require('src/config/env.config.js');

const AuthRoutes = require('./components/Auth/AuthRoutes');
const ApartmentRoutes = require('./components/Apartment/ApartmentRoutes');
const RoomRoutes = require('./components/Room/RoomRoutes');
const ClientRoutes = require('./components/Client/ClientRoutes');
const BookingRoutes = require('./components/Booking/BookingRoutes');

const router = (app) => {

  app.use(config.root_api, AuthRoutes);
  app.use(config.root_api, ApartmentRoutes);
  app.use(config.root_api, RoomRoutes);
  app.use(config.root_api, ClientRoutes);
  app.use(config.root_api, BookingRoutes);

  app.use((req, res) => {
		res.status(404).json({ error: 'Not Found' });
	});   

};

module.exports = router;