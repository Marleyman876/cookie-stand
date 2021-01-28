'use strict';

let myContainer = document.getElementById('container');
let seattleList = document.getElementById('seattle');

console.log(myContainer);

//global variables 

const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustomerPerHr: 23,
  maxCustomerPerHr: 65,
  avgCookiesSold: 6.3,
  cookiesSoldPerHr:[],
  //customerPerHr: [],
  dailySoldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookiesSold);
      this.cookiesSoldPerHr.push(hourlyCookies)
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render:function() {
    this.calCookiesSoldPerHr();
   // console.log('I am here');
    let seattleList = document.getElementById('seattle-stand');
    for (let i = 0; i < hoursArray.length; i++){
      let li = document.createElement('li'); 
      li.textContent = `${hoursArray[i]}: ${this.cookiesSoldPerHr[i]}`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li'); 
    li.textContent = `Total Cookies Sold: ${this.dailySoldTotal}`;
    seattleList.appendChild(li);
    seattleList.classList += 'testing';
  },
};

seattle.render();
console.log(seattle); 

//Tokyo

let tokyo = {
  name: 'Tokyo',
  minCustomerPerHr: 3,
  maxCustomerPerHr: 24,
  avgCookiesSold: 1.2,
  cookiesSoldPerHr:[],
  //customerPerHr: [],
  dailySoldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookiesSold);
      this.cookiesSoldPerHr.push(hourlyCookies)
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render:function() {
    this.calCookiesSoldPerHr();
    //console.log('I am here');
    let tokyoList = document.getElementById('tokyo-stand');
    for (let i = 0; i < hoursArray.length; i++){
      let li = document.createElement('li'); 
      li.textContent = `${hoursArray[i]}: ${this.cookiesSoldPerHr[i]}`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li'); 
    li.textContent = `Total Cookies Sold: ${this.dailySoldTotal}`;
    tokyoList.appendChild(li);
  },
};

tokyo.render();
console.log (tokyo);


///Dubai Stand
let dubai = {
  name: 'Dubai',
  minCustomerPerHr: 11,
  maxCustomerPerHr: 38,
  avgCookiesSold: 3.7,
  cookiesSoldPerHr:[],
  //customerPerHr: [],
  dailySoldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookiesSold);
      this.cookiesSoldPerHr.push(hourlyCookies)
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render:function() {
    this.calCookiesSoldPerHr();
    //console.log('I am here');
    let dubaiList = document.getElementById('dubai-stand');
    for (let i = 0; i < hoursArray.length; i++){
      let li = document.createElement('li'); 
      li.textContent = `${hoursArray[i]}: ${this.cookiesSoldPerHr[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li'); 
    li.textContent = `Total Cookies Sold: ${this.dailySoldTotal}`;
    dubaiList.appendChild(li);
  },
};

dubai.render();
console.log(dubai); 

//Paris 
let paris = {
  name: 'Paris',
  minCustomerPerHr: 20,
  maxCustomerPerHr: 38,
  avgCookiesSold: 2.3,
  cookiesSoldPerHr:[],
  //customerPerHr: [],
  dailySoldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookiesSold);
      this.cookiesSoldPerHr.push(hourlyCookies)
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render:function() {
    this.calCookiesSoldPerHr();
    //console.log('I am here');
    let parisList = document.getElementById('paris-stand');
    for (let i = 0; i < hoursArray.length; i++){
      let li = document.createElement('li'); 
      li.textContent = `${hoursArray[i]}: ${this.cookiesSoldPerHr[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li'); 
    li.textContent = `Total Cookies Sold: ${this.dailySoldTotal}`;
    parisList.appendChild(li);
  },
};

paris.render();
console.log(paris); 

//Lima

let lima = {
  name: 'Lima',
  minCustomerPerHr: 2,
  maxCustomerPerHr: 16,
  avgCookiesSold: 4.6,
  cookiesSoldPerHr:[],
  //customerPerHr: [],
  dailySoldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomerPerHr - this.minCustomerPerHr + 1) + this.minCustomerPerHr);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookiesSold);
      this.cookiesSoldPerHr.push(hourlyCookies)
      this.dailySoldTotal += hourlyCookies;
    }
  },
  
  render:function() {
    this.calCookiesSoldPerHr();
    //console.log('I am here');
    let limaList = document.getElementById('lima-stand');
    for (let i = 0; i < hoursArray.length; i++){
      let li = document.createElement('li'); 
      li.textContent = `${hoursArray[i]}: ${this.cookiesSoldPerHr[i]}`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li'); 
    li.textContent = `Total Cookies Sold: ${this.dailySoldTotal}`;
    limaList.appendChild(li);
  },
};

lima.render();
console.log(lima); 


/*********************************************************Sudo-Code*************************************************************

let cookies= [ '16','20','35','48','56','77','93','144','119','84','61','23','42','57']

*/
