"use strict"

var prideti = document.getElementsByTagName("button")[0]
var delFirst = document.getElementsByTagName("button")[1]
var delLast = document.getElementsByTagName("button")[2]



prideti.addEventListener("click", function(e){
    e.preventDefault()
    if(vardas.value != "", lname.value !="", age.value > 0) {
    var row = table.insertRow(-1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2) 
    cell1.innerHTML = vardas.value
    cell2.innerHTML = lname.value
    cell3.innerHTML = age.value
    var inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.value ="";
    })
} else {
    alert("Įvesk duomenis!")
}
})

delFirst.addEventListener("click", function(e){
    e.preventDefault()
    var rows = table.rows.length
    if(rows > 1) {
       var row = table.deleteRow (1)
    } else {
        alert("Nėra ką trinti!")
    }
})

delLast.addEventListener("click", function(e){
    e.preventDefault()
    var rows = table.rows.length
    if(rows <= 1){
        alert("Nėra ką trinti!")

    } else {
    var row = table.deleteRow (-1)
    }
})

