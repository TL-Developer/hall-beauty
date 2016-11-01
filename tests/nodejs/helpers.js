'use strict';

var app = require('../../config/app')();

global.request  = require('supertest')(app);
global.expect   = require('chai').expect;
global.debug    = require('debug')('hall-beauty:tests');
