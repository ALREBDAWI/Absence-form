function formResult(){
    const form = JSON.parse(sessionStorage.getItem("formData"));

  if(form){
    document.getElementById("name").value = form.name;
    document.getElementById("lastname").value = form.lastname;
    document.getElementById("formation").value = form.formation;

    const abscentContainer = document.getElementById("abscentReason");
    form.abscentReason.forEach(reason => {
      const div = document.createElement("div");
      div.classList.add("abscent-reason");
      div.textContent = reason;
      abscentContainer.appendChild(div);
    });

    
    if(form.oneDay){
      let oneDayBlock = document.getElementById("oneday_block");
      let date = document.getElementById("day_date");
      let startHour = document.getElementById("start_hour");
      let endHour = document.getElementById("end_hour");

      oneDayBlock.style.display = "block";
      date.value = form.oneDay.date;
      startHour.value = form.oneDay.startHour;
      endHour.value = form.oneDay.endHour;

    }
    if(form.manyDays){
      let manyDaysBlock = document.getElementById("manydays_block");
      const startDate = document.getElementById("start_date");
      const endDate = document.getElementById("end_date");
      manyDaysBlock.style.display = "block"
      startDate.value = form.manyDays.startDate;
      endDate.value = form.manyDays.endDate;

    }
  }
   
    
}formResult();