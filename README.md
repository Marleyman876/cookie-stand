# LAB #: 7

## Project Name Salmon Cookie

I built an app with a direct and powerful purpose. My app does all of the things that it accomplishes well. Here  I describe the purpose and functionality so those that visit my README understand the app.

### Author: Garfield Grant

### Links and Resources

* [Math code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).
* [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

### Reflections and Comments

Initially this was a very strenuous assignment, however I found a way to continue to improve upon my code. Below is my initial code full of object literals which was my first approach. the second approach was using a constructor with three functions.

<!-- dead code 
object literals used for initial code. 
/* 
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
console.log(lima);  -->