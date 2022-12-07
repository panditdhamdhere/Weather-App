const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c645d0747dmsh19eceae0536224bp1afb11jsn2f7da17e7ba0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));