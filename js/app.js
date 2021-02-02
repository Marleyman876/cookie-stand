'use strict';
let tableBody = document.getElementById('store-sales');

//global Arrays  

const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const grandTotal = new Array(hoursArray.length + 1).fill(0);

//constructor 

let CookieShop = function (locationName, minCustomerPerHr, maxCustomerPerHr, avgCookiesSold) {
  this.locationName = locationName;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.avgCookiesSold = avgCookiesSold;
  this.cookiesSoldHourlyArray = [];
  this.dailySoldTotal = 0;
  this.calCookiesPerHour();
  this.calGrandTotal();
  this.render();
}
//for random customer 

CookieShop.prototype.randomCustomerHR = function () {
  return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);

};

//calculate cookies per hr//

CookieShop.prototype.calCookiesPerHour = function () {
  for (let i = 0; i < hoursArray.length; i++) {
    let randomCustomer = this.randomCustomerHR();
    let cookiesPerHr = Math.ceil(randomCustomer * this.avgCookiesSold);
    this.cookiesSoldHourlyArray.push(cookiesPerHr);
    this.dailySoldTotal += cookiesPerHr;
  }
};

//render//
let renderHeader = function () {
  let row = document.getElementById('store-hours')
  let th = document.createElement('th')
  th.textContent = 'Location'
  row.appendChild(th);
  for (let i = 0; i < hoursArray.length; i++) {
    th = document.createElement('th');
    th.textContent = hoursArray[i];
    row.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = "Total"
  row.appendChild(th);

}

CookieShop.prototype.render = function () {
  console.log(grandTotal);
  let tr = document.createElement('tr');
  tableBody.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.locationName;
  tr.appendChild(th);

  for (let i = 0; i < hoursArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldHourlyArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailySoldTotal;
  tr.appendChild(td);
};

//calculate grand total
CookieShop.prototype.calGrandTotal = function () {
  for (let i = 0; i < this.cookiesSoldHourlyArray.length; i++) {
    grandTotal[i] += this.cookiesSoldHourlyArray[i];
    grandTotal[grandTotal.length - 1] += this.cookiesSoldHourlyArray[i];
  }
}

let renderFoot = function(){
  let tr = document.getElementById('store-totals');
  let th = document.createElement('th')
  th.textContent = 'Grand Total';
  tr.appendChild(th)
  for (let i = 0; i < grandTotal.length; i++){
    let td = document.createElement('td');
    td.textContent = grandTotal[i];
    tr.appendChild(td);
  }
}
renderHeader();

new CookieShop('Seattle', 23, 65, 6.3);

new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 2.3);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);


renderFoot();
