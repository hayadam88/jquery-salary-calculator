$(document).ready(onReady);

// This function runs when the page is loaded and enables numerous things to happen
function onReady(){
    console.log('JQ');
    $('#submitEmployeeButton').on('click', addEmployeeInfo)
    
}

// This creates an array. Inside the array are employee objects that are created from the input
// fields, and an employee object is placed inside when someone clicks submit
let employeeList = [];


function addEmployeeInfo(){
    console.log('Adding Employee!');
     let newEmployee = {
         FirstName: $('#firstName').val(),
         LastName: $('#lastName').val(),
         ID: $('#ID').val(),
         Title: $('#employeeTitle').val(),
         AnnualSalary: $('#annualSalary').val()
     }
    console.log('Adding Employee:', newEmployee);
    employeeList.push(newEmployee)
    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
}
