
const mainTemp = document.querySelector("#temp")
// const mainTemp = document.querySelector("#cuntry")


//forcast
fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "4ba95fa239mshb1a87eb13adca9fp1a656bjsn1da88a342d75"
	}
})
.then(response => {
	console.log(response.json());
}).then(data=>{
    console.log(data)
})
.catch(err => {
	console.error(err);
});
// fetch(" https://api.ambeedata.com/weather/forecast/by-city?city=Bengaluru&filter=hourly", {
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "aa7fe00e2060c94bf7e2099a3d8cd39e9e5eac096ac87b67aeb7d5825ff76daa",
// 		"Content-type": "application/json"
// 	}
// })

// .then(response => response.json())
//     .then(data =>{
//         console.log(data)
        
//         // mainTemp.innerHTML = data.data.temperature ;
//     } )
// .catch(err => {
// 	console.error(err);
// });



//one day weather 
// fetch("https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12.9889055&lng=77.574044", {
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "aa7fe00e2060c94bf7e2099a3d8cd39e9e5eac096ac87b67aeb7d5825ff76daa",
// 		"Content-type": "application/json"
// 	}
// })

// .then(response => response.json())
//     .then(data =>{
//         console.log(data.data)
        
//         mainTemp.innerHTML = data.data.temperature ;
//     } )
// .catch(err => {
// 	console.error(err);
// });




// fetch("https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12.9889055&lng=77.574044",
// {
//     "method" : "Get",
//     "headers": {
//         "x-api-key" : "aa7fe00e2060c94bf7e2099a3d8cd39e9e5eac096ac87b67aeb7d5825ff76daa" ,
//         "content-type" : "application/json",
//     }
// }).then(response => response.json())
// .then(data => {
//     console.log(data)})
// .catch(err => console.error(err))
