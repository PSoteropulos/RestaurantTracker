import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { getOneHandler } from '../hooks/handlers'


const OneRestaurant = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [restaurantDetails, setRestaurantDetails] = useState({
        title: "",
        author: "",
        pages: "",
        isAvailable: false
    })
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getOneHandler(id, setRestaurantDetails, setLoaded, navigate)
    }, [])

    return (
        <div className='row justify-content-center align-items-center text-center'>
            {!loaded ? "Loading..." :
                <>
                    <NavBar dataToDisplay={`Restaurant ${restaurantDetails.number} Details`} />
                    <h2 className='mt-5'>{restaurantDetails.name}</h2>
                    <h4 className='m-3'>Restaurant Number {restaurantDetails.number}</h4>
                    <h4 className='m-3'>{restaurantDetails.isOpen ? "This restaurant is open." : "This restaurant is closed."}</h4>
                    <div>
                        <Link to={`/restaurants/edit/${restaurantDetails._id}`}><button className='btn btn-danger m-3'>Edit Restaurant Details</button></Link>
                    </div>
                </>
            }
        </div>
    )
}

export default OneRestaurant