'use strict';

//global variables 

let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//constructor to return total cookies per day 

function storeLocation(location, customersMin, customersMax, avgCookieSale, hourlySales) {
  this.location = location;
  this.customersMin = customersMin;
  this.customersMax = customersMax;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = hourlySales;
  this.totalCookies = function () {

    return Math.floor(Math.random() * (this.customersMax - this.customersMin + 1) + this.customersMin);

  }

}



// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65, 
//   avgCookie: 6.3, 
// }
// function randomCustomer(min, max) {
//   min = Math.this.min
//   max = Math.this.max

// }

