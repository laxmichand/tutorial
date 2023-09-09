import axios from 'axios'

const API_URL = "http://localhost:9900/tutorials";

export const getCourses = async () => {

    const response = await axios.get(API_URL +  '/getall');

    return response.data
}

export const getCoursesById = async (id) => {
    const response = await axios.get(API_URL +  '/' + id)
    return response.data
}


export const deleteCoursesById = async (id) => {

    const response = await axios.delete(API_URL + '/' + id)

    return response.data
}

export const addNew = async (body) => {

    const response = await axios.post(API_URL + '/add', body)

    return response.data
}


export const update = async (body,id) => {

    const response = await axios.put(API_URL + '/' +id, body)

    return response.data;
}



