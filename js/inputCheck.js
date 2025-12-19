export function inputCheck(){
    const name = document.getElementById("name");
    const lastname = document.getElementById("lastname");
    const formation = document.getElementById("formation");
    let errorMessage = document.getElementById("error_message")
    const Regex = /^[a-zA-Z]+$/;

    name.addEventListener("input", ()=>{
        if(Regex.test(name.value)){
            errorMessage.textContent = "";
            name.style.borderColor = "green";
        }else{
            errorMessage.innerText = "invalid input, try again!";
            name.style.borderColor = "red";
        }
    })

    lastname.addEventListener("input", ()=>{
        if(Regex.test(lastname.value)){
            errorMessage.textContent = "";
            lastname.style.borderColor = "green";
        }else{
            errorMessage.innerText = "invalid input, try again!";
            lastname.style.borderColor = "red";
        }
    })

    formation.addEventListener("input", ()=>{
        if(Regex.test(formation.value)){
            errorMessage.textContent = "";
            formation.style.borderColor = "green";
        }else{
            errorMessage.innerText = "invalid input, try again!";
            formation.style.borderColor = "red";
        }
    })
}

export function isNameValid(elementId,regex,errorId){
    let myelement = document.getElementById(elementId);
    let myerror = document.getElementById(errorId);
   
    if(regex.test(myelement.value)){
        myelement.style.borderColor = "green";
        myerror.innerText = "";
        return true;
    }else{
        myelement.style.borderColor = "red";
        myerror.innerText = "invalid input!";
        return false;
    }
}