import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../contexts/MyContext'
import { format } from 'date-fns'

const NavBar = ({ homeBool, dataToDisplay }) => {
    // const { allRestaurantsContext } = useContext(MyContext)
    // const mostRecent = allRestaurantsContext.splice(-1)
    const { mostRecent } = useContext(MyContext)

    return (
        <div className='d-flex justify-content-between'>
            <div>
                <h3>{dataToDisplay ? dataToDisplay : "Restaurant Wrangler Deluxe v1.0"}</h3>
            </div>
            <div className='d-flex flex-column align-items-end text-end'>
                {!homeBool && <Link to={"/"}><button className='btn btn-dark m-1'>Home</button></Link>}
                <h5 className='col-8'>
                    {mostRecent.name && `${mostRecent.name} added at ${format((new Date(mostRecent.createdAt)), "h:mm a 'on' EEEE")}!`}
                </h5>
            </div>
        </div>
    )
}

export default NavBar