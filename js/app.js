'use strict'

var Seattle = {
    name: 'Seattle',
    hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    numberofcustomersperhour: [],
    numberofCookiespurchsedPerhour: [],
    minCus: 23,
    maxCus: 65,
    avgCookies: 6.3,
    getRandomCustomer: function () {
        
        for (var i = 0; i < this.hours.length; i++) {
            this.numberofcustomersperhour[i] = getRandomCus(this.maxCus, this.minCus);
        } return this.numberofcustomersperhour;
    },
    getCookiespurchased: function () {
        for (var i = 0; i < this.hours.length; i++) {
             this.numberofCookiespurchsedPerhour[i] = Math.ceil(this.numberofcustomersperhour[i]*this.avgCookies);
            
        } return this.numberofCookiespurchsedPerhour;
            
    },
    render: function () {
        var container = document.getElementById('location');

        var ptag = document.createElement('p');
        container.appendChild(ptag);

        var ptext = document.createTextNode(this.name);
        ptag.appendChild(ptext);

        var ultag = document.createElement('ul');
        container.appendChild(ultag);

        for (var i = 0; i < this.hours.length; i++) {
            var litag = document.createElement('li');
            ultag.appendChild(litag);
            litag.textContent= this.hours[i] + this.numberofCookiespurchsedPerhour[i] + ' cookies';
        }
        litag = document.createElement('li');
        ultag.appendChild(litag);
        litag.textContent='Total: ' + sum() + ' cookies';
    }
}
 var sum = function(){
    var total = 0;

    for (var i  = 0; i < Seattle.numberofCookiespurchsedPerhour.length; i++){
 
    total  += Seattle.numberofCookiespurchsedPerhour[i];
    }return total;
 }
 
var getRandomCus = function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


console.log(Seattle.getRandomCustomer());
console.log(Seattle.getCookiespurchased());
console.log(sum());
console.log(Seattle.numberofCookiespurchsedPerhour);
console.log(Seattle.getRandomCustomer());
console.log(Seattle.numberofcustomersperhour);
console.log(Seattle.render())



var Tokyo = {
    name: 'Tokyo',
    hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    numberofcustomersperhour: [],
    numberofCookiespurchsedPerhour: [],
    minCus: 3,
    maxCus: 24,
    avgCookies: 1.2,
    getRandomCustomer: function () {
        
        for (var i = 0; i < this.hours.length; i++) {
            this.numberofcustomersperhour[i] = getRandomCus(this.maxCus, this.minCus);
        } return this.numberofcustomersperhour;
    },
    getCookiespurchased: function () {
        for (var i = 0; i < this.hours.length; i++) {
             this.numberofCookiespurchsedPerhour[i] = Math.ceil(this.numberofcustomersperhour[i]*this.avgCookies);
            
        } return this.numberofCookiespurchsedPerhour;
            
    },
    render: function () {
        var container = document.getElementById('location');

        var ptag = document.createElement('p');
        container.appendChild(ptag);

        var ptext = document.createTextNode(this.name);
        ptag.appendChild(ptext);

        var ultag = document.createElement('ul');
        container.appendChild(ultag);
        
        for (var i = 0; i < this.hours.length; i++) {
            var litag = document.createElement('li');
            ultag.appendChild(litag);
            
            litag.textContent=this.hours[i]+ this.numberofCookiespurchsedPerhour[i] + ' cookies';
            
        }
        litag = document.createElement('li');
        ultag.appendChild(litag);
        litag.textContent='Total: ' + sum() + ' cookies';
    }
}

console.log(Tokyo.getRandomCustomer());
console.log(Tokyo.getCookiespurchased());
console.log(sum());
console.log(Tokyo.numberofCookiespurchsedPerhour);
console.log(Tokyo.getRandomCustomer());
console.log(Tokyo.numberofcustomersperhour);
console.log(Tokyo.render())


var Dubai = {
    name: 'Dubai',
    hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    numberofcustomersperhour: [],
    numberofCookiespurchsedPerhour: [],
    minCus: 11,
    maxCus: 38,
    avgCookies: 3.7,
    getRandomCustomer: function () {
        
        for (var i = 0; i < this.hours.length; i++) {
            this.numberofcustomersperhour[i] = getRandomCus(this.maxCus, this.minCus);
        } return this.numberofcustomersperhour;
    },
    getCookiespurchased: function () {
        for (var i = 0; i < this.hours.length; i++) {
             this.numberofCookiespurchsedPerhour[i] = Math.ceil(this.numberofcustomersperhour[i]*this.avgCookies);
            
        } return this.numberofCookiespurchsedPerhour;
            
    },
    render: function () {
        var container = document.getElementById('location');

        var ptag = document.createElement('p');
        container.appendChild(ptag);

        var ptext = document.createTextNode(this.name);
        ptag.appendChild(ptext);

        var ultag = document.createElement('ul');
        container.appendChild(ultag);
        
        for (var i = 0; i < this.hours.length; i++) {
            var litag = document.createElement('li');
            ultag.appendChild(litag);
            
            litag.textContent=this.hours[i] + this.numberofCookiespurchsedPerhour[i] + ' cookies';
            
        }
        litag = document.createElement('li');
        ultag.appendChild(litag);
        litag.textContent='Total: ' + sum() + ' cookies';
    }
}


console.log(Dubai.getRandomCustomer());
console.log(Dubai.getCookiespurchased());
console.log(sum());
console.log(Dubai.numberofCookiespurchsedPerhour);
console.log(Dubai.getRandomCustomer());
console.log(Dubai.numberofcustomersperhour);
console.log(Dubai.render())

var Paris = {
    name: 'Paris',
    hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    numberofcustomersperhour: [],
    numberofCookiespurchsedPerhour: [],
    minCus: 20,
    maxCus: 38,
    avgCookies: 2.3,
    getRandomCustomer: function () {
        
        for (var i = 0; i < this.hours.length; i++) {
            this.numberofcustomersperhour[i] = getRandomCus(this.maxCus, this.minCus);
        } return this.numberofcustomersperhour;
    },
    getCookiespurchased: function () {
        for (var i = 0; i < this.hours.length; i++) {
             this.numberofCookiespurchsedPerhour[i] = Math.ceil(this.numberofcustomersperhour[i]*this.avgCookies);
            
        } return this.numberofCookiespurchsedPerhour;
            
    },
    render: function () {
        var container = document.getElementById('location');

        var ptag = document.createElement('p');
        container.appendChild(ptag);

        var ptext = document.createTextNode(this.name);
        ptag.appendChild(ptext);

        var ultag = document.createElement('ul');
        container.appendChild(ultag);
        
        for (var i = 0; i < this.hours.length; i++) {
            var litag = document.createElement('li');
            ultag.appendChild(litag);
            
            litag.textContent= this.hours[i]+this.numberofCookiespurchsedPerhour[i] + ' cookies';
            
        }
        litag = document.createElement('li');
        ultag.appendChild(litag);
        litag.textContent='Total: ' + sum() + ' cookies';
    }
}


console.log(Paris.getRandomCustomer());
console.log(Paris.getCookiespurchased());
console.log(sum());
console.log(Paris.numberofCookiespurchsedPerhour);
console.log(Paris.getRandomCustomer());
console.log(Paris.numberofcustomersperhour);
console.log(Paris.render());

var Lima = {
    name: 'Lima',
    hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'],
    numberofcustomersperhour: [],
    numberofCookiespurchsedPerhour: [],
    minCus: 2,
    maxCus: 16,
    avgCookies: 4.6,
    getRandomCustomer: function () {
        
        for (var i = 0; i < this.hours.length; i++) {
            this.numberofcustomersperhour[i] = getRandomCus(this.maxCus, this.minCus);
        } return this.numberofcustomersperhour;
    },
    getCookiespurchased: function () {
        for (var i = 0; i < this.hours.length; i++) {
             this.numberofCookiespurchsedPerhour[i] = Math.ceil(this.numberofcustomersperhour[i]*this.avgCookies);
            
        } return this.numberofCookiespurchsedPerhour;
            
    },
    render: function () {
        var container = document.getElementById('location');

        var ptag = document.createElement('p');
        container.appendChild(ptag);

        var ptext = document.createTextNode(this.name);
        ptag.appendChild(ptext);

        var ultag = document.createElement('ul');
        container.appendChild(ultag);
        
        for (var i = 0; i < this.hours.length; i++) {
            var litag = document.createElement('li');
            ultag.appendChild(litag);
            
            litag.textContent=this.hours[i]+ this.numberofCookiespurchsedPerhour[i] + ' cookies';
            
        }
        litag = document.createElement('li');
        ultag.appendChild(litag);
        litag.textContent='Total: ' + sum() + ' cookies';
    }
}


console.log(Lima.getRandomCustomer());
console.log(Lima.getCookiespurchased());
console.log(sum());
console.log(Lima.numberofCookiespurchsedPerhour);
console.log(Lima.getRandomCustomer());
console.log(Lima.numberofcustomersperhour);
console.log(Lima.render())
