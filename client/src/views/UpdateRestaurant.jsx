import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { getOneHandler, changeHandler, editHandler } from '../hooks/handlers'

const UpdateRestaurant = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const originalState = {
        name: "",
        number: "",
        isOpen: true
    }
    const [restaurantDetails, setRestaurantDetails] = useState(originalState)
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState({})
    const [validForm, setValidForm] = useState(true)

    useEffect(() => {
        getOneHandler(id, setRestaurantDetails, setLoaded, navigate)
    }, [])

    return (
        <div className='justify-content-center row text-center'>
            {!loaded ? "Loading..." :
                <>
                    <NavBar dataToDisplay={`Update Restaurant  ${restaurantDetails.number}`} />
                    <h3 className='mt-3'>Edit this restaurant!</h3>
                    <form className='col-6 row text-center justify-content-center' onSubmit={(e) => editHandler(e, id, restaurantDetails, setRestaurantDetails, originalState, setErrors, navigate, setValidForm)}>

                        <div className='col-6 m-1'>
                            <label className='form-label' htmlFor="name">Restaurant Name</label>
                            <input className='form-control' type="text" id="name" name="name" value={restaurantDetails.name} onChange={(e) => changeHandler(e, setRestaurantDetails, restaurantDetails, setErrors, setValidForm)} />
                            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                        </div>
                        <div className='col-6 m-1'>
                            <label className='form-label' htmlFor="number">Restaurant Number</label>
                            <input className='form-control' type="number" id="number" name="number" value={restaurantDetails.number} onChange={(e) => changeHandler(e, setRestaurantDetails, restaurantDetails, setErrors, setValidForm)} />
                            {errors.number && <p style={{ color: "red" }}>{errors.number.message}</p>}
                        </div>
                        <div className='my-3'>
                            <label className='form-check-label mx-2' htmlFor="isOpen">Is this restaurant open?</label>
                            <input className='form-check-input mx-2' type='checkbox' id="isOpen" name="isOpen" checked={restaurantDetails.isOpen} onChange={() => setRestaurantDetails(prev => ({ ...prev, isOpen: !restaurantDetails.isOpen }))} />
                        </div>
                        <div>
                            <button className='btn btn-primary mt-2' type='submit' disabled={!validForm}>{validForm ? "Edit Restaurant" : "Complete Form to Submit"}</button>
                        </div>
                    </form>
                </>
            }
        </div>
    )
}

export default UpdateRestaurant
