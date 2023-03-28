/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News';
import MyContext from './Components/MyContext';
import React, { useContext ,useState} from 'react';



function App() {
  const [textInput, setTextInput] = useState('');
  // const { textInput} = useContext(MyContext);
  //    console.log(textInput);

  // const fetchNews = async () => {
  //   fetch(`https://newsapi.org/v2/top-headlines?q=${textInput}&apiKey=5632d528a83c406b8ea5a4a70c7aeb8c`)
  //     .then((response) => response.json())
  //     .then((data) => setPost(data.articles))
  //     .catch((error) => console.log(error));
  // };
  
  return (
    <MyContext.Provider value={{ textInput,setTextInput}}>
     <BrowserRouter>
        <Navbar/>
     <Routes>
        <Route path="/" element={<News category="general" />}/>
          <Route path="business" element={<News category="business" />}/>
          <Route path="health" element={<News category="health" />} />
          <Route path="entertainment" element={<News category="entertainment" />}/>
          <Route path="sports" element={<News category="sports" />}/>
          <Route path="technology" element={<News category="technology" />}/>
      </Routes>   
      
    </BrowserRouter>
</MyContext.Provider>
  
   
  );
}

export default App;
