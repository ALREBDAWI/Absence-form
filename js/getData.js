export async function getData() {
        
        //let getData = await fetch("https://raw.githubusercontent.com/neojero/JsonApi/main/motif.json");
        let getData = await fetch("resources/test.json");
        let myData = await getData.json();
        return myData;
    }