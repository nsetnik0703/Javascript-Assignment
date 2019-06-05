// from data.js
var tableData = data;
var tbody = d3.select("tbody");


console.log(tableData);

tableData.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
    } )});

var date = d3.select("#datetime").property("value");
// var dateInput = d3.select("#placeholde").property("value");

// var filterByDate = tableData.filter(function(date)) {
//     return date == 
// }




// var marvelHeroes =  heroes.filter(function(hero) {
// 	return hero.franchise == “Marvel”;
// });