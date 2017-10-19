export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'

export const getCategories = ()=> {
	const url = `${ROOT_URL}/categories`;
	const request = axios.get(url, { headers: { 'Authorization': 'whatever-you-want' }});
	console.log(request);

	return{
		type: GET_CATEGORIES,
		payload: request

	};
}

export const getPosts= ()=> {
	const url = `${ROOT_URL}/posts`;
	const request = axios.get(url, { headers: { 'Authorization': 'whatever-you-want' }}).then();
	console.log(request);

	return{
		type: GET_POSTS,
		payload: request

	};
}
