import React, { useState, useContext } from 'react'
import { createHandler, changeHandler } from '../hooks/handlers'
import MyContext from '../contexts/MyContext'

const CreateRestaurant = ({ setAllRestaurants }) => {
    const { setAllRestaurantsContext, setMostRecent } = useContext(MyContext)
    const defaultState = {
        name: "",
        number: "",
        isOpen: true
    }
    const [newRestaurantData, setNewRestaurantData] = useState(defaultState)
    const [errors, setErrors] = useState({})
    const [validForm, setValidForm] = useState(false)

    return (
        <div className='mt-5 justify-content-center row text-center'>
            <h3>Add a Restaurant!</h3>
            <form className='col-6 row text-center justify-content-center' onSubmit={(e) => createHandler(e, newRestaurantData, setNewRestaurantData, defaultState, setAllRestaurants, setValidForm, setErrors, setMostRecent)}>
                <div className='col-6 mb-1'>
                    <label className='form-label' htmlFor="name">Restaurant Name</label>
                    <input className='form-control' type="text" id="name" name="name" value={newRestaurantData.name} onChange={(e) => changeHandler(e, setNewRestaurantData, newRestaurantData, setErrors, setValidForm)} />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>
                <div className='col-6 m-1'>
                    <label className='form-label' htmlFor="number">Restaurant Number</label>
                    <input className='form-control' type="number" id="number" name="number" value={newRestaurantData.number} onChange={(e) => changeHandler(e, setNewRestaurantData, newRestaurantData, setErrors, setValidForm)} />
                    {errors.number && <p style={{ color: "red" }}>{errors.number.message}</p>}
                </div>
                <div className='my-2'>
                    <label className='form-check-label mx-2' htmlFor="isOpen">Is this restaurant open?</label>
                    <input className='form-check-input mx-2' type='checkbox' id="isOpen" name="isOpen" checked={newRestaurantData.isOpen} onChange={() => setNewRestaurantData(prev => ({ ...prev, isOpen: !newRestaurantData.isOpen }))} />
                </div>
                <div>
                    <button className='btn btn-primary mt-2' type='submit' disabled={!validForm}>{validForm ? "Add Restaurant" : "Complete Form to Submit"}</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRestaurant