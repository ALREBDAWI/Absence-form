export async function getData() {
        
        //let getData = await fetch("https://raw.githubusercontent.com/neojero/JsonApi/main/motif.json");
        let getData = await fetch("test.json");
        let myData = await getData.json();
        return myData;
    }