export let oneDayAbscent; //it will be used as boolean to determain wich dates will be submitted (one day abscent case or many days) 
export function toggle(){ 
            
            let oneday = document.getElementById("oneday");
            let manydays = document.getElementById("manydays");
            let oneday_btn = document.getElementById("oneday_btn");
            let manydays_btn = document.getElementById("manydays_btn");

            oneday_btn.addEventListener("click", () => {
            oneday.style.display = "block";
            manydays.style.display = "none";
            oneday_btn.disabled = true;
            manydays_btn.disabled = false;
            oneDayAbscent = true;
            console.log(oneDayAbscent);
            
        });

        manydays_btn.addEventListener("click", () => {
            manydays.style.display = "block";
            oneday.style.display = "none";
            manydays_btn.disabled = true;
            oneday_btn.disabled = false;
            oneDayAbscent = false;
            console.log(oneDayAbscent);
            
        });
        
    }

        