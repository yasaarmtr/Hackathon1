function getData(){
    // let f = document.getElementById('fname').value
    // let s = document.getElementById('sname').value  
	fetch(`https://covid-19-data.p.rapidapi.com/country/code?code=mu`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "8337f40406mshc7fb184342977b5p17f3a1jsne6dbece24b7e"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);
    putResults(data)
})
// .catch(err => {
//     console.error(err);
// });
}

function putResults(objRes){
	let res = document.getElementById('results');
    res.innerText = " "

    var h4 = document.createElement('h4');
    res.innerText = "Covid-19 update for Maurituis" ;
    res.appendChild(h4);

    var h4 = document.createElement('h4');
    res.innerText = "Confirmed cases: " + objRes[0].confirmed;
    res.appendChild(h4);

    var h4 = document.createElement('h4');
    h4.innerText = "Recovered cases: " + objRes[0].recovered;
    res.appendChild(h4);

    var h4 = document.createElement('h4');
    h4.innerText = "Critical cases: " + objRes[0].critical;
    res.appendChild(h4);

    var h4 = document.createElement('h4');
    h4.innerText = "Deaths cases: " + objRes[0].deaths;
    res.appendChild(h4);

    var h4 = document.createElement('h4');
    h4.innerText = "LastUpdate: " + objRes[0].lastUpdate;
    res.appendChild(h4);
}


