export async function getData() {
        // we can fetch data to get absence motives list from github repo or from local resources
        //let getData = await fetch("https://raw.githubusercontent.com/neojero/JsonApi/main/motif.json");
        let getData = await fetch("resources/test.json");
        let myData = await getData.json();
        return myData;
    }