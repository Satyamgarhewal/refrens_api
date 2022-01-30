const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/refrens';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

const ConfigureDB = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(dburl, options)
    .then(() => {
      console.log('Successfully connected to DB');
    })
    .catch((err) => {
      console.log('Error connecting to DB');
    });
};

module.exports = ConfigureDB;
