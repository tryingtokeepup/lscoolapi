const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

module.exports = server => {
  server.use(helmet());
  server.use(express.json()); // built-in
  server.use(morgan('short')); // logging middleware
  server.use(cors());
};
