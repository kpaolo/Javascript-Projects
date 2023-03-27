const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c6fa087cemsh354527bbb2aa854p179d8cjsn486ff1d08795',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};



    
function getJoke(){
    jokeEl.innerText = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(data => {
        jokeEl.innerText = data.body[0]['punchline'];
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
    })
	.catch(err => {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(err);
    });
}


btnEl.addEventListener("click", getJoke);

