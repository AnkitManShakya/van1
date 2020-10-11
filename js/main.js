
let searchfield
let filtered;
let url = "https://jsonplaceholder.typicode.com/users"
let output=``



getMonsters = () => {
    fetch(url).
        then(response => response.json()).
        then(data => {
            if(searchfield){
                data=data.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));
            }   
            output=''
            data.forEach(monster => {
                output+=`
                    
                    <div class="card_component">
                             <img src={'https://robohash.org/${monster.id}?set=set2$size=180x180'} alt="monster"/>
                             <h2>${monster.name}</h2>
                            <p>${monster.email}</p>
                    </div>
                `
            });
            document.getElementById('monsters').innerHTML=output


        })
}



function handlekeyup() {
    searchfield = document.getElementById('searchbox').value
    getMonsters();
}

getMonsters();
