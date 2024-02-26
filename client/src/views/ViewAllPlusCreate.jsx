import React, { useState, useEffect, useContext } from 'react'
import NavBar from "../components/NavBar"
import AllRestaurants from '../components/AllRestaurants'
import CreateRestaurant from '../components/CreateRestaurant'
import { getAllHandler, getAllOpenHandler, getAllClosedHandler } from '../hooks/handlers'
import MyContext from '../contexts/MyContext'

const ViewAllPlusCreate = () => {
    const { allRestaurantsContext, setAllRestaurantsContext, loadedContext, setLoadedContext, setMostRecent } = useContext(MyContext)
    const [allRestaurants, setAllRestaurants] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        // getAllHandler(setAllRestaurantsContext, setLoadedContext)
        // getAllHandler(setAllRestaurantsContext, setLoaded)
        getAllHandler(setAllRestaurants, setLoaded, setMostRecent)
    }, [])

    const filters = {
        openFilter: () => {
            getAllOpenHandler(setAllRestaurants, setLoaded)
        },

        closedFilter: () => {
            getAllClosedHandler(setAllRestaurants, setLoaded)
        },

        resetRestaurants: () => {
            getAllHandler(setAllRestaurants, setLoaded, setMostRecent)
        }
    }

    return (
        <div className=''>

            {!loaded ? "Loading..." :

                // {!loadedContext ? "Loading..." :
                <>
                    <NavBar homeBool={true} />

                    {/* <AllRestaurants /> */}
                    {/* <AllRestaurants allRestaurants={allRestaurantsContext} loaded={loadedContext} /> */}
                    <AllRestaurants allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants} loaded={loaded} filters={filters} />
                    <CreateRestaurant setAllRestaurants={setAllRestaurants} />

                    {/* <CreateRestaurant /> */}
                    {/* <CreateRestaurant setAllRestaurants={setAllRestaurantsContext}/> */}
                </>
            }
        </div>
    )
}

export default ViewAllPlusCreate