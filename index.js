const input = [];

fetch("./index.json")
.then( (response) => {return response.json()})
.then((data) => input.push(...data))


function findmatchs(wordToMatch, input){
    return input.filter( current => {
        const regex = new RegExp(wordToMatch,"gi");
        return current.city.match(regex) || current.place.match(regex) 
    })
}


function displayMatchs(){
    const matchArry = findmatchs(this.value, input);
    console.log(matchArry)
    const html = matchArry.map( current => {
        const regex = new RegExp(this.value, "gi");
        console.log(regex)
        const cityName = current.city.replace(regex, `<span class = "hl"> ${this.value}</span>`)
        const placeName = current.place.replace(regex, `<span class = "hl"> ${this.value}</span>`)
        return `<li>
                <span class = "name"> ${cityName} ${placeName}</span>
        </li>`
    }).join();
    sugesstion.innerHTML = html;
    if(this.value == ""){
        
        sugesstion.innerHTML = "";
    }
}

const search = document.querySelector(".input")
search.addEventListener("change", displayMatchs);
search.addEventListener("keyup", displayMatchs);

const sugesstion = document.querySelector(".suggestion")