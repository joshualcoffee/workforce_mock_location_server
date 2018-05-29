const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Course
const Location = new Schema({
  // "_id": {
  //   type: Number
  // },
  // "agency_id": {
  //   type: String
  // },
  // "client_id": {
  //   type: String
  // },
  // "apikey": {
  //   type: String
  // },
  // "name": {
  //   type: String
  // },
  // "address": {
  //   type: String
  // },
  // "city": {
  //   type: String
  // },
  // "province": {
  //   type: String
  // },
  // "country": {
  //   type: String
  // },
  // "postalCode": {
  //   type: String
  // },
  // "phone": {
  //   type: String
  // },
  // "geo": {
  //   type: Array
  // }
  payload: {
    type: Object
  }
},{
  collection: 'locations'
});

module.exports = mongoose.model('Location', Location);
