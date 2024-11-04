const express = require('express');
const api = express();

const launchesRouter = require('./launches/launches.router');
const planetsRouter = require('./planets/planets.router');

api.use('/launches', launchesRouter);
api.use('/planets', planetsRouter);

module.exports = api;
