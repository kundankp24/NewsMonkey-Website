import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  // const apiKey = process.env.API_KEY;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
          <NavBar/> 
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} 
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="business" pageSize={pageSize} country="in" category="business"/>}/> 
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="health" pageSize={pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="science" pageSize={"701ca4a4b82c451b945ef20308fc540d"} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="sports" pageSize={"701ca4a4b82c451b945ef20308fc540d"} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey="701ca4a4b82c451b945ef20308fc540d" key="technology" pageSize={"701ca4a4b82c451b945ef20308fc540d"} country="in" category="technology"/> } />
          </Routes>
        </Router>
      </div>
    )
 
}

export default App;