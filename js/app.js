'use strict'

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:']
var loc = [];

function Stores(name, minCus, maxCus, avgCookies) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookies = avgCookies;
    this.numberofcustomersperhour = [];
    this.numberofCookiespurchsedPerhour = [];
    this.total = 0;
    loc.push(this);  
}


//Git the numbers of random customers per hours
Stores.prototype.getRandomCustomer = function () {
    for (var i = 0; i < hours.length; i++) {
        this.numberofcustomersperhour[i] = getRandomCus(this.maxCus, this.minCus);
    } return this.numberofcustomersperhour;
}


//Git the numbers of Cookies purchased per hour
Stores.prototype.getCookiespurchased = function () {
    for (var i = 0; i < hours.length; i++) {
        this.numberofCookiespurchsedPerhour[i] = Math.ceil(this.numberofcustomersperhour[i] * this.avgCookies);
        this.total += this.numberofCookiespurchsedPerhour[i];

    } return this.numberofCookiespurchsedPerhour;
}

Stores.prototype.render = function () {
    // this.numberofCookiespurchsedPerhour.push(this.total);
    var data = document.getElementById('aziz');

    var tableRow = document.createElement('tr');
    data.appendChild(tableRow);

    var tableData23 = document.createElement('td');
    tableRow.appendChild(tableData23);
    tableData23.textContent = (this.name);

    for (var j = 0; j < hours.length; j++) {
        var tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent = (this.numberofCookiespurchsedPerhour[j]);

    }
    var tableData2 = document.createElement('td');
    tableRow.appendChild(tableData2);
    tableData2.textContent = (this.total);
}

//find random number helper function
var getRandomCus = function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// helper function to creat table headeer
var tableHeader = function () {
    // hours.push('Daily Location Total');
    var container = document.getElementById('m');

    var tableTag = document.createElement('table');
    container.appendChild(tableTag);
    tableTag.setAttribute('id', 'aziz')

    var headerRow = document.createElement('tr');
    tableTag.appendChild(headerRow);
    var tableData33 = document.createElement('th');
    headerRow.appendChild(tableData33);
    tableData33.textContent = " ";

    for (var j = 0; j < hours.length; j++) {
        var tableData = document.createElement('th');
        headerRow.appendChild(tableData);
        tableData.textContent = hours[j]
    }
    var tableData1 = document.createElement('th');
    headerRow.appendChild(tableData1);
    tableData1.textContent = 'Daily Location Total'

}
tableHeader();


//creat footer to the table
function Footer() {
    var data = document.getElementById('aziz');
    var tr7 = document.createElement('tr');
    data.appendChild(tr7);
    var th6 = document.createElement('th');
    tr7.appendChild(th6);
    th6.textContent = 'Totals';
    var totalOfTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var sumHour = 0;
        for (let j = 0; j < loc.length; j++) {
            sumHour = sumHour + loc[j].numberofCookiespurchsedPerhour[i];
        }
        var td8 = document.createElement('td');
        tr7.appendChild(td8);
        td8.textContent = sumHour;
        totalOfTotal = totalOfTotal + sumHour;
    }
    var th9 = document.createElement('td');
    tr7.appendChild(th9);
    th9.textContent = totalOfTotal;
}




var syattle = new Stores('Syattle', 23, 65, 6.3);
syattle.getRandomCustomer();
syattle.getCookiespurchased();
syattle.render();


var tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.getRandomCustomer();
tokyo.getCookiespurchased();
tokyo.render();


var dubai = new Stores('Dubay', 11, 38, 3.7);
dubai.getRandomCustomer();
dubai.getCookiespurchased();
dubai.render();


var paris = new Stores('Paris', 20, 38, 2.3);
paris.getRandomCustomer();
paris.getCookiespurchased();
paris.render();


var lima = new Stores('Lima', 2, 16, 4.6);
lima.getRandomCustomer();
lima.getCookiespurchased();
lima.render();

Footer();