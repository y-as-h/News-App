import './App.css';
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY
  render() {
    return (

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={15} apikey={this.apikey} category="general" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={15} apikey={this.apikey} category="sports" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={15} apikey={this.apikey} category="entertainment" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={15} apikey={this.apikey} category="technology" />} />
            <Route exact path="/business" element={<News key="business" pageSize={15} apikey={this.apikey} category="business" />} />
            <Route exact path="/health" element={<News key="health" pageSize={15} apikey={this.apikey} category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={15} apikey={this.apikey} category="science" />} />
          </Routes>
        </div>
      </Router>


    )
  }
}
