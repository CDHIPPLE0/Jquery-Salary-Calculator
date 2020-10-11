$(document).ready(clickWait);

const employeeList = [];
const costAllowed = 20000;
let totalCost =0; 

function clickWait(){
  $('.entryButton').on('click', checkForm);
  $('.addEmployee').on('click','.delete', removeAsk)
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
    let aSalary = $('.anSalary').val();
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
   let isSelected = false;
   anSalary = Number(anSalary);  // changes salary back to a number
   const employee = {
       FirstName: fName, 
       LastName: lName, 
       ID: id,
       Title: title,
       AnnualSalary: anSalary,
       IsSelected: isSelected,
    };
    $('.form').val('');
    employeeList.push (employee);
    iterateAndDisplayProps();
}

function iterateAndDisplayProps(){
  $('.addEmployee').empty();
  let totalCost = 0;
    for(i=0; i < employeeList.length; i++){
      let index = employeeList[i];
      totalCost += index.AnnualSalary;
       $('.addEmployee').append(
         `<tr>
           <td>${index.FirstName}</td>
           <td>${index.LastName}</td>
           <td>${index.ID}</td>
           <td>${index.Title}</td>
           <td>${index.AnnualSalary}</td>
           <td><button class ='delete' type='submit' data-index="${i}">Delete</button></td>
         </tr>`
       )
    }
    $('.total').addClass("inTheGreen");
    if(totalCost > costAllowed){
      $('.total').addClass("inTheRed")
    }
    $('.total').text(totalCost);
}

function removeAsk(){
 let index = $(this).data('index');
 console.log(index);
 employeeList[index].IsSelected = true;
 $(this).parent().remove();
 employeeList.splice(index, 1);
 iterateAndDisplayProps();
}