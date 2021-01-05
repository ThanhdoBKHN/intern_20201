const express = require('express');
const path = require('path');

module.exports = [
  // public dir
  [express.static(path.join(__dirname, '../public'))],
  // admin lte lib
  [
    '/admin-lte/dist',
    express.static(path.join(__dirname, '../node_modules/admin-lte/dist/')),
  ],
  [
    '/admin-lte/plugins',
    express.static(path.join(__dirname, '../node_modules/admin-lte/plugins/')),
  ],
];
