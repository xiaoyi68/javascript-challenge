// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);
 
});


var tbody=d3.select("tbody");

// appends a table

function result(filterData){
    tbody.html("")
    filterData.forEach(report => {
    var row=tbody.append("tr");
    Object.entries(report).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value);
    });
});
}

result(tableData)

// select submit button
var submit=d3.select("#filter-btn")

submit.on("click",function(){
    d3.event.preventDefault();
    var inputDateV=inputDate.property("value");
    var inputCityV=inputCity.property("value").trim().toLowerCase();
    var inputStateV=inputState.property("value").trim().toLowerCase();
    var inputCountryV=inputCountry.property("value").trim().toLowerCase();
    var inputShapeV=inputShape.property("value").trim().toLowerCase();
    //console.log(inputDateV)

    var response=tableData.filter(data=>data.datetime===inputDateV);

    result(response)
})

