import React from 'react'
import NavBar from '../components/NavBar'

const NotFound = () => {
    return (
        <div>
            <NavBar dataToDisplay={"This is not the restaurant you are looking for..."} />
            <h2 className='m-2 mt-5 text-center'>The page you are seeking is a figment of your imagination.</h2>
        </div>
    )
}

export default NotFound