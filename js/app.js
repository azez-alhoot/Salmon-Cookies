'use strict'

var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:']
var loc = [];
var totalHour = [];
var totalOftotals = [];
function Stores(name, minCus, maxCus, avgCookies) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookies = avgCookies;
    this.numberofcustomersperhour = [];
    this.numberofCookiespurchsedPerhour = [];
    this.total = 0;
    loc.push(this);
    //totaloftotals the enitional value is 0
    // totalOftotals.push(this.total);
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
        // totalOftotals.push(this.total);
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
var tableFooter = function () {
    var data = document.getElementById('aziz');

    var foot = document.createElement('tfoot');
    data.appendChild(foot);

    var tableD = document.createElement('tr');
    foot.appendChild(tableD);

    var tableDL = document.createElement('td');
    tableD.appendChild(tableDL);
    tableDL.textContent = 'Total'


    console.log(loc[1]);
    for(var i=0; i<hours.length; i++);{
        for (var j = 0; j <loc.length; j++) {
            // var tableD22 = document.createElement('td');
            // tableD.appendChild(tableD22);
            // tableD22.textContent = loc[i].numberofCookiespurchsedPerhour[j];
                
            var sum = 0;
            
            if(j < loc.length-1){
                console.log(j);
                sum = sum + loc[j].numberofCookiespurchsedPerhour[i]; 
                console.log(sum);   
            } else if(j == loc.lenght-1){
                sum = sum + loc[j].numberofCookiespurchsedPerhour[i];  
                totalHour[i] = sum;
                sum = 0;  

            }
        }
        // var tableD22 = document.createElement('td');
        // tableD.appendChild(tableD22);
        // tableD22.textContent = totalHour[i]; 
    }
    console.log(totalHour);
    
    // console.log(totalHour);
    var tableDL9 = document.createElement('td');
    tableD.appendChild(tableDL9);

    tableDL9.textContent = totalOftotals;
}




Stores.prototype.sumTotals = function(){
    
    totalOftotals += this.total;
    return totalOftotals; 
}

var syattle = new Stores('Syattle', 23, 65, 6.3);
syattle.getRandomCustomer();
syattle.getCookiespurchased();
syattle.render();
// console.log(loc);
// console.log(totalOftotals);
// console.log(syattle);
// console.log(syattle.getRandomCustomer());
// console.log(syattle.getCookiespurchased());
// console.log(syattle.render());

var tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.getRandomCustomer();
tokyo.getCookiespurchased();
tokyo.render();
// console.log(tokyo);
// console.log(tokyo.getRandomCustomer());
// console.log(tokyo.getCookiespurchased());
// console.log(tokyo.render());

var dubai = new Stores('Dubay', 11, 38, 3.7);
dubai.getRandomCustomer();
dubai.getCookiespurchased();
dubai.render();
// console.log(dubai);
// console.log(dubai.getRandomCustomer());
// console.log(dubai.getCookiespurchased());
// console.log(dubai.render());

var paris = new Stores('Paris', 20, 38, 2.3);
paris.getRandomCustomer();
paris.getCookiespurchased();
paris.render();
// console.log(paris);
// console.log(paris.getRandomCustomer());
// console.log(paris.getCookiespurchased());
// console.log(paris.render());

var lima = new Stores('Lima', 2, 16, 4.6);
lima.getRandomCustomer();
lima.getCookiespurchased();
lima.render();
tableFooter();
// console.log(lima);
// console.log(lima.getRandomCustomer());
// console.log(lima.getCookiespurchased());
// console.log(lima.render());


// console.log(totalHour);
// console.log(totalOftotals);
// console.log(syattle.sumTotals());