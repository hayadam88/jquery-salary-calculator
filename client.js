$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#submitEmployeeButton').on('click', addEmployeeInfo)
    
}

let employeeList = [];

function addEmployeeInfo(){
    console.log('Adding Employee!');
     let newEmployee = {
         Name: $('#firstName').val(),
     }
    console.log('Adding Employee:', newEmployee);
    employeeList.push(newEmployee)
}
