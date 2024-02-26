import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { getAllHandler } from './hooks/handlers'
import OneRestaurant from './views/OneRestaurant'
import UpdateRestaurant from './views/UpdateRestaurant'
import NotFound from './views/NotFound'
import ViewAllPlusCreate from './views/ViewAllPlusCreate'
import MyContext from './contexts/MyContext'

function App() {
  // const [allRestaurantsContext, setAllRestaurantsContext] = useState([])
  // const [loadedContext, setLoadedContext] = useState(false)
  const [mostRecent, setMostRecent] = useState({})


  // useEffect(()=>{
  //   getAllHandler(setAllRestaurantsContext, setLoadedContext)
  // }, [])

  return (
    <div className='container-fluid p-3 bg-secondary' style={{ minHeight: "100vh" }}>
      {/* {!loaded? "Loading...": */}
      {/* <MyContext.Provider value={{ allRestaurantsContext, setAllRestaurantsContext, loadedContext, setLoadedContext }}> */}
      <MyContext.Provider value={{ mostRecent, setMostRecent }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={< ViewAllPlusCreate />} /> */}
            <Route path='/' element={< ViewAllPlusCreate />} />
            <Route path='/restaurants/:id' element={< OneRestaurant />} />
            <Route path='/restaurants/edit/:id' element={< UpdateRestaurant />} />
            <Route path='*' element={< NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

      {/* // } */}
    </div>
  )
}

export default App
