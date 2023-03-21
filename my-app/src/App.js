/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News';

function App() {
  const [textInput, setTextInput] = useState('india');

  const handleTextInputChange = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      setTextInput(event.target.value);
    }
  };

  // const fetchNews = async () => {
  //   fetch(`https://newsapi.org/v2/top-headlines?q=${textInput}&apiKey=5632d528a83c406b8ea5a4a70c7aeb8c`)
  //     .then((response) => response.json())
  //     .then((data) => setPost(data.articles))
  //     .catch((error) => console.log(error));
  // };
  
  return (
     <BrowserRouter>

     <Navbar handleTextInputChange={handleTextInputChange}/>
     <Routes>
        <Route path="/" element={<News category="general" textInput={textInput}/>}/>
          <Route path="business" element={<News category="business" textInput={textInput}/>}/>
          <Route path="health" element={<News category="health" textInput={textInput}/>} />
          <Route path="entertainment" element={<News category="entertainment" textInput={textInput}/>}/>
          <Route path="sports" element={<News category="sports" textInput={textInput}/>}/>
          <Route path="technology" element={<News category="technology" textInput={textInput}/>}/>
      </Routes>   

    </BrowserRouter>
  );
}

export default App;
