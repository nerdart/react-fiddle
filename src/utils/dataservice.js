import axios from 'axios';
import { setItem } from './localstorage';
import keys from '../keys';


const BASE_API = keys.API_KEY;
export const LoginUser = (usercreds) => {
	return axios.post(`${BASE_API}login`, usercreds)
  .then(function (response) {
  	if(response.data.details) {
    	var token=setItem(response.data.details.token, 'token');
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
    if(response.data.details) {
    	setItem(response.data.details.token);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
export const dashboardData =() => {
	return axios.get(`${BASE_API}dashboard`)
	.then(function (response){
		console.log(response);
		return response;

	})
}
export const profileData = () => {
	const token = localStorage.token;
	var config = {
		headers: {
			'Authorization': 'Bearer ' + token,
			'token': token
		}
	};
	return axios.get(`${BASE_API}me`, config)
		.then(function (response){
			console.log(response)
			return response;
		});
};
export const NavBarData = (url) => {

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
export const timeline = (pn) => {
	
		const token = localStorage.token;
		var config = {
					headers: {
						'Authorization': 'Bearer ' + token,
						'token': token
					}
		 };
		return axios.get(`${BASE_API}timeline?page=${pn}`, config)
		.then(function(res){
			console.log(res);
			return res;
		})
	
	}

export const scheduled = (pn) => {
	const token = localStorage.token;
	var config = {
		headers: {
			'Authorization' : 'Bearer' +token,
			'token': token
		}
	};
	return axios.get(`${BASE_API}schedulePost?page=${pn}`, config)
	.then(function(response){
			console.log(response.data.next_page);
			return response;
	})
}

export const bookmarks = (pn) => {
	const token = localStorage.token;
	var config = {
		headers: {
			'Authorization' : 'Bearer' +token,
			'token': token
		}
	};
	return axios.get(`${BASE_API}bookmark?page=${pn}`, config)
		.then(function(response){
			console.log(response.data.bookmark);
			return response;
		})
}
export const affiliate = () =>{
	const token = localStorage.token;
	var config = {
		headers: {
			'Authorization' : 'Bearer' +token,
			'token': token
		}
	};
	return axios.get(`${BASE_API}aff_param`, config)
	.then(function(response){
		console.log(response);
		return response;
	})
}















