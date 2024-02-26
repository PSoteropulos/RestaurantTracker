import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteHandler } from '../hooks/handlers'
// import MyContext from '../contexts/MyContext'

const AllRestaurants = ({ allRestaurants, loaded, setAllRestaurants, filters }) => {
    const navigate = useNavigate()

    // const {allRestaurantsContext, loadedContext} = useContext(MyContext)
    // console.log(allRestaurantsContext)
    // useEffect(()=>{

    // },[loaded])

    return (
        <div className='mt-5 justify-content-center row text-center'>
            {!loaded ? "Loading..." :
                // {!loadedContext? "Loading..." : 
                <>
                    <div className='d-flex justify-content-between'>
                        <h3>Find restaurants in your area!</h3>
                        <div>
                            <button onClick={filters.openFilter} className='btn btn-success btn-sm m-2'>Open Restaurants</button>
                            <button onClick={filters.closedFilter} className='btn btn-warning btn-sm m-2'>Closed Restaurants</button>
                            <button onClick={filters.resetRestaurants} className='btn btn-info btn-sm m-2'>All Restaurants</button>
                        </div>
                    </div>

                    <table className='table table-hover'>
                        <thead>
                            <tr className='table-dark'>
                                <th>Restaurant Name</th>
                                <th>Restaurant Number</th>
                                <th>Open</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRestaurants.map((restaurant) => (
                                // {allRestaurantsContext.map((restaurant) => (
                                <tr className={restaurant.number < 100 ? "table-danger" : restaurant.number < 1000 ? "table-success" : "table-info"} key={restaurant._id}>
                                    <td><Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link></td>
                                    <td>{restaurant.number}</td>
                                    <td>{restaurant.isOpen ? "Yes" : "No"}</td>
                                    <td>{restaurant.isOpen ? <button onClick={() => deleteHandler(restaurant._id, navigate, setAllRestaurants)} className='btn btn-danger btn-sm'>Delete</button> : "Can't remove closed restaurant."}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}

export default AllRestaurants