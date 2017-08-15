const localStorage = window.localStorage;

export const setItem = (token) => {
	localStorage.setItem('token', token);
}
export const getItem=() =>{
	localStorage.getItem('token');
}
export const removeItem = () => {
	localStorage.removeItem('token');
}
