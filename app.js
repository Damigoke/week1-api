let arrOfPeople = [];

// execute this script only when all html elements have been loaded onto the page
document.addEventListener('DOMContentLoaded', function() {

     // console.log(mainEl.innerHTML)
    const img=[
        "Luke Skywalker.png",
        "C3-PO.png",
        "R2-D2.png",
        "Darth Vader.png",
        "Leia Organa.png",
        "OwenLars.webp",
        "Beru Whitesun Lars.webp",
        "R2-D5.png",
        "Biggs Darklighter.webp",
        "Obi-wan Kenobi.png"

    ]

    let url = "https://swapi.dev/api/people";

    fetch("https://swapi.dev/api/people")
        .then(response => {
            // converting your json response to a js object
            return response.json();
        })
        .then(data => {
            let resultArr = data.results;
            console.log(data)

            // get a reference to parent element

            // let mainEl = document.querySelector('#wrapper');
            // let mainEl = document.getElementById('wrapper')
            // let mainEl = document.getElementsByTagName('main');

            let mainEl = document.querySelector('.leaderboard__profiles');
            let elementStr = "";

            resultArr.forEach((element, index) => {
                // let img = "OwenLars.webp";
                
                
                arrOfPeople[index] = element;
                let str = `
            
                <article class="leaderboard__profile" onClick="handleClick(${index})">
                   <div class="round"><img src="${img[index]}" alt="" class="leaderboard__picture"></div> 
                    <span class="leaderboard__name">${element.name}</span>
        
                </article>
                `
                elementStr += str;
            });

            

            mainEl.innerHTML = elementStr;
        })
    
});
let detailsEl = document.getElementById('details');

function handleClick(index) {
    let obj = arrOfPeople[index];
    // console.log(index)
     detailsEl.innerHTML = `
    <article class="leaderboard__profile">
        <span class="leaderboard__name1">${obj.name}</span>
        <span class="leaderboard__name1">${obj.gender}</span>
        <span class="leaderboard__name1">${obj.height}</span>
    </article>
     `
}