$(document).ready(clickWait);

const employeeInfo = [];
let totalCost =0; 

function clickWait(){
  $('.entryButton').on('click', checkForm);
}

function checkForm() {
    let firstName= $('.fName').val();
    firstName = String(firstName);
    firstName = firstName.trim();
    let lastName = $('.lName').val();
    lastName = String(lastName);
    lastName = lastName.trim();
    let idCheck = $('.id').val();
    idCheck = String(idCheck);
    idCheck = idCheck.trim();
    let jobTitle = $('.title').val();
    jobTitle = String(jobTitle);
    jobTitle = jobTitle.trim();
    if (firstName.length > 0 && lastName.length > 0 &&
        idCheck.length > 0 && jobTitle.length > 0 && aSalary.length > 0) {
      entryGet();
    }
    else alert('Please complete the form');
  }

function entryGet(){
   let fName = $('.fName').val();
   let lName = $('.lName').val();
   let id = $('.id').val();
   let title = $('.title').val();
   let anSalary = $('.anSalary').val();
   anSalary = Number(anSalary);  // changes salary back to a number
   const employee = {
       FirstName: fName, 
       LastName: lName, 
       ID: id,
       Title: title,
       AnnualSalary: anSalary,
    };
    $('.form').val('');
    employeeInfo.push (employee);

}

function cycleProps(){

}