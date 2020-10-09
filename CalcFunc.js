$(document).ready(clickWait);

const employeeInfo = [];
let totalCost =0; 

function clickWait(){
    console.log('1');
  $('.entryButton').on('click', entryGet);
}

function entryGet(){
   let fName = $('.fName').val();
   let lName = $('.lName').val();
   let id = $('.id').val();
   let title = $('.title').val();
   let anSalary = $('.anSalary').val();
   const employee = {
       FirstName: fName, 
       LastName: lName, 
       ID: id,
       Title: title,
       AnnualSalary: anSalary
    };
    employeeInfo.push (employee);
}

