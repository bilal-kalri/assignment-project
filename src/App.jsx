import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './SignIn'
import EditMovie from './EditMovie';
import CreateMovie from './CreateMovie';
import NoMovie from './NoMovie';
import MovieList from './MovieList';

const App = () => {
  return (
    <>
      <Router>
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