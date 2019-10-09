// from data.js
var tableData = data;

// load table
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

// =========================  First basic search part================== //

// set button variables
var first_filter=d3.select("#f-filter-btn");
var first_reset=d3.select("#f-reset-btn");

// set input box variables
var first_input=d3.select("#datetime");


// filter function
first_filter.on("click",function(){
    d3.event.preventDefault();
    var first_inputV=first_input.property("value");
    console.log(first_inputV)

    var response=tableData.filter(data=>data.datetime===first_inputV);
    result(response)
})


// reset table and input function
first_reset.on("click",function(){
    tbody.html("")
    result(tableData)
    first_input.property("value","")
})


// =========================  second advance search part================== //
var value=d3.select("#value");
var criter=d3.select("#criteria")
var add=d3.select("#add")
var addB=d3.select("#add-btn")
var reset=d3.select("#reset-btn");
var secFilter=d3.select("#filter-btn");
var resetC=d3.select("#reset-btn")


var filter={}

addB.on("click",function(){
    var items=criter.property("value")
    var v=value.property("value").trim();
     if (items==="Date"){
        items=items.trim()
    }
    else{
        v=v.toLowerCase()
    }
    add.append("li")
     .text(items+":"+v)

     filter[items]=v

    criter.property("value","")
    value.property("value","")
})



secFilter.on("click",function(){

    lens=Object.keys(filter).length


    if (lens==1){
        input=Object.values(filter)[0]
        key=Object.keys(filter)[0]
        if (key=="Date"){
            k="datetime"
        }
        else {
            k=key.toLowerCase()
        }

        var response=tableData.filter(data=>data[k]==input)
           result(response)
}

     }

)

resetC.on("click",function(){
    tbody.html("")
    criter.property("value","")
    value.property("value","")
    add.html("")
    result(tableData)
    filter={}
    add.selectAll("li").remove()
})