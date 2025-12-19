import { oneDayAbscent } from "./toggle.js";
import { isNameValid } from "./inputCheck.js";

export function submitForm() {
    const form = document.getElementById("form");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const selected = [];
        const Regex = /^[a-zA-Z]+$/;
        const errorId = "error_message";

        const verifyName = isNameValid("name", Regex, errorId);
        const verifyLastName = isNameValid("lastname", Regex, errorId);
        const verifyFormation = isNameValid("formation", Regex, errorId);

        if (!verifyName || !verifyLastName || !verifyFormation) {
            return;
        }

        let checkboxes = document.querySelectorAll(".motif_checkbox");
        checkboxes.forEach(cb => {
            if (cb.checked) {
                selected.push(cb.value);
            }
        });

        if (selected.length === 0) {
            window.alert("you must choose on motif at");
            return;
        }

        const data = {
            name: document.getElementById("name").value,
            lastname: document.getElementById("lastname").value,
            formation: document.getElementById("formation").value,
            abscentReason: selected,
        };

        const oneDayDateInput = document.getElementById("oneday_abscent_date");
        const oneDayStartHourInput = document.getElementById("oneday_abscent_start_hour");
        const oneDayEndHourInput = document.getElementById("oneday_abscent_end_hour");

        const manyDaysStartDateInput = document.getElementById("manydays_abscent_start_date");
        const manyDaysEndDateInput = document.getElementById("manydays_abscent_end_date");

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (oneDayAbscent) {
            if (new Date(oneDayDateInput.value) < today) {
                alert("date cant be in the past");
                return;
            }

            if (oneDayEndHourInput.value <= oneDayStartHourInput.value) {
                alert("end hour must be after start hour!");
                return;
            }

            data.oneDay = {
                date: oneDayDateInput.value,
                startHour: oneDayStartHourInput.value,
                endHour: oneDayEndHourInput.value,
            };

        } else {
            if (new Date(manyDaysEndDateInput.value) <= new Date(manyDaysStartDateInput.value)) {
                alert("end date must be after start date!");
                return;
            }

            data.manyDays = {
                startDate: manyDaysStartDateInput.value,
                endDate: manyDaysEndDateInput.value
            };
        }

        sessionStorage.setItem("formData", JSON.stringify(data));
        window.location.href = "result.html";
    });
}
