import { oneDayAbscent } from "./toggle.js";
import { isNameValid } from "./inputCheck.js";

export function submitForm() {
    const form = document.getElementById("form");

    form.addEventListener("submit", e => {
        e.preventDefault();
    
        const selected = [];
        const Regex = /^[a-zA-Z]+$/;
        const errorId = "error_message";
        let errorMsg = document.getElementById(errorId);

        const verifyName = isNameValid("name", Regex, errorId);
        const verifyLastName = isNameValid("lastname", Regex, errorId);
        const verifyFormation = isNameValid("formation", Regex, errorId);

        let checkboxes = document.querySelectorAll(".motif_checkbox");

        const oneDayDateInput = document.getElementById("oneday_abscent_date");
        const oneDayStartHourInput = document.getElementById("oneday_abscent_start_hour");
        const oneDayEndHourInput = document.getElementById("oneday_abscent_end_hour");

        const manyDaysStartDateInput = document.getElementById("manydays_abscent_start_date");
        const manyDaysEndDateInput = document.getElementById("manydays_abscent_end_date");

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let signaturStudent = document.getElementById("signature_student");

        if (!verifyName || !verifyLastName || !verifyFormation) {
            return;
        }

        
        checkboxes.forEach(cb => {
            if (cb.checked) {
                selected.push(cb.value);
            }
        });

        if (selected.length === 0) {
            errorMsg.textContent = "il faut choisir au moins un motif";
            return;
        }

        const data = {
            name: document.getElementById("name").value,
            lastname: document.getElementById("lastname").value,
            formation: document.getElementById("formation").value,
            abscentReason: selected,
            
        };

        if (oneDayAbscent) {

            if(!oneDayDateInput.value){
                errorMsg.textContent = "il faut saisire une date!";
                return; 
            }

            if(!oneDayStartHourInput.value || !oneDayEndHourInput.value){
                errorMsg.textContent = "il faut precisier une heure";
                return;
            }

            if (new Date(oneDayDateInput.value) < today) {
                errorMsg.textContent = "la date ne peut pas etre dans le passé"
                return;
            }

            if (oneDayEndHourInput.value <= oneDayStartHourInput.value) {
                errorMsg.textContent = "L'heure de fin ne peut pas etre antérieure à l'heure de début";
                return;
            }

            data.oneDay = {
                date: oneDayDateInput.value,
                startHour: oneDayStartHourInput.value,
                endHour: oneDayEndHourInput.value,
            };

        } else {

            if(!manyDaysStartDateInput.value || !manyDaysEndDateInput.value){
                errorMsg.textContent = "il faut saisire des dates!";
                return;
            }

            if (new Date(manyDaysEndDateInput.value) <= new Date(manyDaysStartDateInput.value)) { 
                errorMsg.textContent = "la date de fin ne peut pas etre antérieure à la date de début";
                return;
            }

            data.manyDays = {
                startDate: manyDaysStartDateInput.value,
                endDate: manyDaysEndDateInput.value
            };
        }

        if(signaturStudent.value.trim()){
            data.signature = signaturStudent.value;
        }

        sessionStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "result.html";
    });
}
