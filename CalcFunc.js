$(document).ready(clickWait);

const employeeList = []; //array of employee objects
const costAllowed = 20000; //max budget
let totalCost =0; //tracks cost relative to budget

function clickWait(){ //waits for click either on the submit or delete button and calls the appropriate function.
  $('.entryButton').on('click', entryGet); 
  $('.addEmployee').on('click','.delete', remove)
}

function entryGet(){ //after form data has been trimmed and verified to contain relevant data it is sent to the array.
   let fName = $('.fName').val().trim();
   let lName = $('.lName').val().trim();
   let id = $('.id').val().trim();
   let title = $('.title').val().trim();
   let anSalary = $('.anSalary').val().trim();
   anSalary = anSalary / 12 ;
   console.log(anSalary);
   anSalary =  anSalary.toFixed(2);
   let isSelected = false;
   if (fName.length > 0 && lName.length > 0 &&
    id.length > 0 && title.length > 0 && anSalary.length > 0) {
   anSalary = Number(anSalary);  // changes salary to a number
   const employee = {
       FirstName: fName, 
       LastName: lName, 
       ID: id,
       Title: title,
       MonthlySalary: anSalary,
       IsSelected: isSelected,
    };
    $('.form').val(''); //refresh input value
    employeeList.push (employee);
    iterateAndDisplayProps();//sends data to be output to dom
}
 else alert('Please complete the form, ensure number fields contain no chars');
}

function iterateAndDisplayProps(){
  let totalCost =0;
  $('.total').removeClass("inTheRed");//allows background color of totalsalary to be reset depending on budget comparison
  $('.total').removeClass("inTheGreen");
  $('.addEmployee').empty();
    for(i=0; i < employeeList.length; i++){
      let index = employeeList[i];
      totalCost += index.MonthlySalary;
       $('.addEmployee').append(
         `<tr>
           <td class="font1">${index.FirstName}</td>
           <td class="font1">${index.LastName}</td>
           <td class="font1">${index.ID}</td>
           <td class="font1">${index.Title}</td>
           <td class="font1">$${index.MonthlySalary.toLocaleString('en-US')}</td>
           <td><button class ='delete button' type='submit' data-index="${i}">Delete</button></td>
         </tr>`
       )
    }
     if(totalCost != 0 && totalCost < costAllowed){ //sets background color of totalsalary to respond to budget comparison
    $('.total').addClass("inTheGreen");
    }
    else if(totalCost > costAllowed){
      $('.total').addClass("inTheRed")
    } 
    $('.total').text('$' + totalCost.toLocaleString('en-US'));
}

function remove(){ //deletes from table on delete button press and calls the display function.
 let index = $(this).data('index');
 employeeList[index].IsSelected = true;
 $(this).parent().parent().remove();
 employeeList.splice(index, 1);
 iterateAndDisplayProps();
}