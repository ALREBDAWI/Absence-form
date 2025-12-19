import { getData } from "./getData.js";

export async function motifList(){
        let allData = await getData();
        
        console.log(allData);
    
        let container = document.getElementById("left_container");
        
        
        allData.members.forEach(motif => {

        let element = document.createElement("div");
        element.className = "div_element";
        let title = document.createElement("h3");
        title.innerHTML = motif.name + " : " + motif.title;
        
        element.append(title);

        
            motif.options.forEach(option => {

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