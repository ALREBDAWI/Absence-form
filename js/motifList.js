import { getData } from "./getData.js";
// function to create a list of abscence motives from fetched data
export async function motifList(){
        let allData = await getData();
        
        console.log(allData); // see fetched data in console 
    
        let container = document.getElementById("left_container");
        
        allData.members.forEach(motif => {
        //create a div and title for each abscence motives groupe    
        let element = document.createElement("div");
        element.className = "div_element";
        let title = document.createElement("h3");
        title.innerHTML = motif.name + " : " + motif.title;
        
        element.append(title);
        
        motif.options.forEach(option => {
                // create checkbox input for each abscence motif
                let label = document.createElement("label");
                let input = document.createElement("input");
                let br = document.createElement("br");
                input.type = "checkbox";
                input.name = option.op_label;
                input.value = option.op_label;
                input.className = "motif_checkbox";
                label.innerText = option.op_label;
                
                label.appendChild(input);
                element.append(label,br);

            });

        container.append(element); 

        })};