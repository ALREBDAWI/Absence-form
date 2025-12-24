    //application start point
    import { motifList } from "./motifList.js";
    import { toggle } from "./toggle.js";
    import  {submitForm} from "./submit.js";
    import { getData } from "./getData.js";
    import { inputCheck } from "./inputCheck.js";
    
    document.addEventListener("DOMContentLoaded", ()=>{
        
        getData();
        toggle();
        motifList();
        submitForm();
        inputCheck();
        
    });

    
    
        
        

    

