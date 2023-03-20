/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Card'
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';

function App() {
  const [posts, setPost] = useState(null);
  const [textInput, setTextInput] = useState('top-headlines');
  const [category, setCategory] = useState('general');

  useEffect(() => {
    fetchNews();
  }, [textInput]);

  const handleTextInputChange = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      setTextInput(event.target.value);
    }
  };

  const fetchNews = async () => {
    fetch(`https://newsapi.org/v2/everything?q=${textInput}&apiKey=5632d528a83c406b8ea5a4a70c7aeb8c`)
      .then((response) => response.json())
      .then((data) => setPost(data.articles))
      .catch((error) => console.log(error));
  };


//   const baseURL = "https://newsapi.org/v2/everything?q=keyword&apiKey=5632d528a83c406b8ea5a4a70c7aeb8c";

  console.log(posts);
  
  return (
     <>
     {/* <Footer/> */}
     <Navbar handleTextInputChange={handleTextInputChange}/>
     <div style={{display:"flex",flexWrap:"wrap",gap:"40px 10px", justifyContent:"space-between",margin:"140px"}}>
      {posts?.map((post)=>(   
      <Card title={post.title} description={post.description} image={post.urlToImage} date={post.publishedAt} url={post.url}/>
     )
     )}</div>
   
    </>
  );
}

export default App;
