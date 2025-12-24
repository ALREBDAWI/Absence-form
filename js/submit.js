import { oneDayAbscent } from "./toggle.js"; // boolean var to distinct between two abscence cases 
import { isNameValid } from "./inputCheck.js";

export function submitForm() {
    const form = document.getElementById("form");

    form.addEventListener("submit", e => {
        e.preventDefault();

        //array to strore chosen abscence motives
        const selected = []; 
        const Regex = /^[a-zA-Z]+$/;
        const errorId = "error_message";

        //getting error message element
        const errorMsg = document.getElementById(errorId);

        //verify if name entry is valid 
        const verifyName = isNameValid("name", Regex, errorId);
        const verifyLastName = isNameValid("lastname", Regex, errorId);
        const verifyFormation = isNameValid("formation", Regex, errorId);

        //getting one day abscence case input elements
        const oneDayDateInput = document.getElementById("oneday_abscent_date");
        const oneDayStartHourInput = document.getElementById("oneday_abscent_start_hour");
        const oneDayEndHourInput = document.getElementById("oneday_abscent_end_hour");

        //getting multiple days abscence case input elements
        const manyDaysStartDateInput = document.getElementById("manydays_abscent_start_date");
        const manyDaysEndDateInput = document.getElementById("manydays_abscent_end_date");

        //get all checkbox input
        const checkboxes = document.querySelectorAll(".motif_checkbox");

        //signature input
        let signaturStudent = document.getElementById("signature_student");

        //today's date with no specific hour
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        //verify name input
        if (!verifyName || !verifyLastName || !verifyFormation) {
            return;
        }

        //get checked checkboxes and push them to array
        checkboxes.forEach(cb => {
            if (cb.checked) {
                selected.push(cb.value);
            }
        });

        //if no checkboxes are chosen don't submit and display erroe message
        if (selected.length === 0) {
            errorMsg.textContent = "il faut choisir au moins un motif";
            return;
        }

        // store input values in an object
        const data = {
            name: document.getElementById("name").value,
            lastname: document.getElementById("lastname").value,
            formation: document.getElementById("formation").value,
            abscentReason: selected,
            
        };

        //date entry logical verification

        if (oneDayAbscent) { //one day case

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

        } else { // many days case

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

        // if signature is entered, store it in form data object
        if(signaturStudent.value.trim()){
            data.signature = signaturStudent.value;
        }
        
        //store form data object in session storage
        sessionStorage.setItem("formData", JSON.stringify(data));
        
        //go to form results page
        window.location.href = "result.html";
    });
}
