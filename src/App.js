import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import Navbar from'./components/Navbar';
import HackathonList from'./components/HackathonList';
import HackathonPost from'./components/HackathonPost';
import AddHackathon from'./components/AddHackathon';


function App() {
  return (
    <Router>
          <div className="App">
            <Navbar />
            <div>
              <Route exact path="/" component={HackathonList} />
              <Route exact path="/hackathon/:id" component={HackathonPost} />
              <Route exact path="/add-hackathon" component={AddHackathon} />
            </div>
          </div>
    </Router>
  );
}

export default App;
