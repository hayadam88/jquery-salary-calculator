$(document).ready(onReady);

// This function runs when the page is loaded and enables numerous things to happen
function onReady(){
    console.log('JQ');
    $('#submitEmployeeButton').on('click', addEmployeeInfo)
    
}

// This creates an array. Inside the array are employee objects that are created from the input
// fields, and an employee object is placed inside when someone clicks submit
let employeeList = [];

// This function creates an employee object from the information from the input fields and then
// pushes that object into the employeeList array
function addEmployeeInfo(){
    console.log('Adding Employee!');
    // Creates a new employee object from the input fields
     let newEmployee = {
         FirstName: $('#firstName').val(),
         LastName: $('#lastName').val(),
         ID: $('#ID').val(),
         Title: $('#employeeTitle').val(),
         AnnualSalary: $('#annualSalary').val()
     }
    console.log('Adding Employee:', newEmployee);
    // Pushes the employee object into the employeeList array
    employeeList.push(newEmployee)
    // Erases the input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
    // Calls a function that will list the employees on the DOM
    showEmployees();
}

// This function will put the employees in a table on the DOM
/*function showEmployees(){
    console.log('In Show Employees');
    let el = $('#employeeInformationSub');
    el.empty();
    for (let i = 0; i < employeeList.length; i++) {
        // append each item to the DOM
        el.append(
        `<li>First Name:${employeeList[i].FirstName} Last Name:${employeeList[i].LastName}</li>`);
    }
}*/