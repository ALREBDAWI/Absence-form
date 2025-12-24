//function to show form results after entry
function formResult(){
    //retrive data from session storage
    const form = JSON.parse(sessionStorage.getItem("formData"));

  if(form){
    // get name and course
    document.getElementById("name").value = form.name;
    document.getElementById("lastname").value = form.lastname;
    document.getElementById("formation").value = form.formation;

    const abscentContainer = document.getElementById("abscentReason");

    
    //one day elements
    const oneDayBlock = document.getElementById("oneday_block");
    const date = document.getElementById("day_date");
    const startHour = document.getElementById("start_hour");
    const endHour = document.getElementById("end_hour");

    //many days elements
    const manyDaysBlock = document.getElementById("manydays_block");
    const startDate = document.getElementById("start_date");
    const endDate = document.getElementById("end_date");

    const signatureResult = document.getElementById("signature_result");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");

    // create abscence reasons block content
    form.abscentReason.forEach(reason => {
      const div = document.createElement("div");
    
      div.textContent = reason;
      abscentContainer.appendChild(div);
    });

    // show dates based on abscence case
    if(form.oneDay){
      oneDayBlock.style.display = "block";
      date.value = form.oneDay.date;
      startHour.value = form.oneDay.startHour;
      endHour.value = form.oneDay.endHour;
    }

    if(form.manyDays){ 
      manyDaysBlock.style.display = "block"
      startDate.value = form.manyDays.startDate;
      endDate.value = form.manyDays.endDate;
    }

    if(form.signature){
      signatureResult.append(myLabel, myInput);
      myLabel.textContent = "signature"
      myInput.value = form.signature;
    }

    //print form results
    const printBtn = document.getElementById("print-btn");
    printBtn.addEventListener("click", ()=> window.print())
    
  }
   
    
}
formResult();