import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const getAllRestaurants = async () => {
    return await http.get('/restaurants')
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

const getOneRestaurant = async (id) => {
    return await http.get(`/restaurants/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

const createRestaurant = async (dataObject) => {
    return await http.post('/restaurants', dataObject)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

const updateOneRestaurant = async (id, dataObject) => {
    return await http.put(`/restaurants/${id}`, dataObject)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

const deleteRestaurant = async (id) => {
    return await http.delete(`/restaurants/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

const getAllOpenRestaurants = async () => {
    return await http.get('/restaurants/open')
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

const getAllClosedRestaurants = async () => {
    return await http.get('/restaurants/closed')
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}

export { getAllRestaurants, createRestaurant, getOneRestaurant, updateOneRestaurant, deleteRestaurant, getAllOpenRestaurants, getAllClosedRestaurants }