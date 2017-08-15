import axios from 'axios';
import { setItem } from './localstorage';
import keys from '../keys';


const BASE_API = keys.API_KEY;
export const LoginUser = (usercreds) => {
	return axios.post(`${BASE_API}login`, usercreds)
  .then(function (response) {
  	if(response.data.details) {
    	var token=setItem(response.data.details.token);
    	return response.data.details.token;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
export const RegisterUser = (userdata) => {
	axios.post(`${BASE_API}signup`, userdata)
  .then(function (response) {
  	console.log(response.data.details)
    if(response.data.details) {
    	setItem(response.data.details.token);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
export const dashboardData =() =>{
	axios.get(`${BASE_API}dashboard`)
	.then(function (response){
		console.log(response);

	})
}

export const NavBarData = (url) =>{

	const token = localStorage.token;
	console.log(token);
	var config = {
        headers: {
        	'Authorization': 'Bearer ' + token,
        	'token': token
        }
   };
	const postData = { link: url };
	return axios.post(`${BASE_API}new_link?link=${url}`, postData, config)
	.then(function(res){
		return res;
	})

}



















