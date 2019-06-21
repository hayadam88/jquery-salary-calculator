$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#submitEmployeeButton').on('click', addEmployeeInfo)
    
}

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
    
}
