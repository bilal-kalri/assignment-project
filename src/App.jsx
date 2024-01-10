import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import SignIn from './SignIn'
import EditMovie from './EditMovie';
import CreateMovie from './CreateMovie';
import NoMovie from './NoMovie';
import MovieList from './MovieList';
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const App = () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <>

      <Router>
        <div className='container nav'>
          <ul className={`flex items-center ${toggle ? "flex" : "hidden"}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/create-movie">Create movie</NavLink>
            </li>
            <li>
              <NavLink to="/movie-list">Movie list</NavLink>
            </li>
            <li>
              <NavLink to="/no-movie">No movie</NavLink>
            </li>
            <li>
              <NavLink to="/edit-movie">Edit movie</NavLink>
            </li>
          </ul>
          <div className="toggle-icon">
            {
              toggle ? <IoCloseOutline color="#fff" size="30" onClick={() => setToggle(!toggle)} /> :
                <HiMiniBars3 color="#fff" size="25" onClick={() => setToggle(!toggle)} />
            }

          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/create-movie" exact element={<CreateMovie />} />
          <Route path="/movie-list" exact element={< MovieList />} />
          <Route path="/no-movie" exact element={<NoMovie />} />
          <Route path="/edit-movie" exact element={<EditMovie />} />
        </Routes>
      </Router>
    </>
  )
}

export default App