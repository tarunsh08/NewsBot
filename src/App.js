import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>

        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress}   key="home"  pageSize={5} country="us" category="General" />}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress}   key="general"  pageSize={5} country="us" category="General" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress}  key="sports" pageSize={5} country="us" category="Sports" />} />
          <Route exact path='/business' element={<News setProgress={setProgress}  key="business" pageSize={5} country="us" category="Business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" pageSize={5} country="us" category="Entertainment" />} />
          <Route exact path='/health' element={<News setProgress={setProgress}  key="health" pageSize={5} country="us" category="Health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress}  key="science" pageSize={5} country="us" category="Science" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress}  key="technology" pageSize={5} country="us" category="Technology" />} />
        </Routes>
        </Router>
      </div>
      
    )
}

export default App