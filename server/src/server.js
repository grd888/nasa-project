const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  'mongodb+srv://nodetut:oaO9fMJgrUn6G2BO@nodedevtut.inhie.mongodb.net/nasa?retryWrites=true&w=majority&appName=nodedevtut';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
