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
function showEmployees(){
    console.log('In Show Employees');
    //targets the table body
    let el = $('#tableBody');
    let annualSalary = 0;
    let monthlySalary = 0;
    el.empty();
    for (let i = 0; i < employeeList.length; i++) {
        //append each item to the DOM
        el.append(
        `<tr>
        <th>${employeeList[i].FirstName}</th>
        <th>${employeeList[i].LastName}</th>
        <th>${employeeList[i].ID}</th>
        <th>${employeeList[i].Title}</th>
        <th>${employeeList[i].AnnualSalary}</th>
        <th><button id="deleteButton">Delete</button></th>
        </tr>`
        );
        // Calculate the annual salary. This says when an employee is added
        // to the table, the Annaul Salary property from the employee object
        // will be added to the annualSalary variable declared above
        annualSalary += Number(employeeList[i].AnnualSalary);
    } // end for loop


    monthlySalary = Math.round(annualSalary / 12);
    $('#totalMonthlySalary').html(monthlySalary);
    if ( monthlySalary > 20000){
        console.log('stooooop');
        $('#totalMonthlySalary').parent().addClass('backgroundRed');
        }
        
        
}