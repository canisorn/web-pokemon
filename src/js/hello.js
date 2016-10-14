import {sayHi} from './function'
const name = "Joy Canisorn Test2"
console.log(sayHi(name))

$('#homeMenu').html("HomeTest");

import axios from 'axios'
const batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json'
axios.get(batmanUrl).then(response => {
      console.log("GET DATA:",response.data)
    })
	
	/*
		//แต่ไม่นิยมใช้ 
			const  promise =axios.get(batmanUrl);
			promise.then(function(response){
				console.log("GET RESPONSE:",response.data.Title)
			})
	*/