const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://nodetut:oaO9fMJgrUn6G2BO@nodedevtut.inhie.mongodb.net/nasa?retryWrites=true&w=majority&appName=nodedevtut';

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}
