import axios from 'axios'

axios.defaults.baseURL = 'https://reqres.in/api'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers.common['x-rapidapi-host'] = 'real-estate12.p.rapidapi.com'
// axios.defaults.headers.common['x-rapidapi-key'] = '128eafe479msh11e37001839e404p198655jsn7e6abdfc23e0'
export default axios