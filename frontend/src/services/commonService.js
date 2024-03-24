import axios from 'axios'
const baseUrl = '/categories'
// const baseUrl = "http://localhost:5001/categories"
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, {content:newObject})
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, {content:newObject})
    return request.then(response => response.data)
}

const deleteRecord = (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update, deleteRecord }