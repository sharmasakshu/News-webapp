
import React from 'react'
import { useState,useEffect ,useContext } from 'react';
import  Card from './Card';
import MyContext from './MyContext';

const News = (props) => {
    const [posts, setPost] = useState(null);
    const { textInput} = useContext(MyContext);
    console.log(textInput);

    useEffect(() => {
        fetchNews();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [textInput]);

    

    const fetchNews = async () => {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&q=${textInput}&category=${props.category}&apiKey=5632d528a83c406b8ea5a4a70c7aeb8c`
        );
        let data = await response.json();
        setPost(data.articles);
      };
    
      
      console.log(posts);
  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"40px 10px", justifyContent:"space-between",margin:"140px"}}>
          {posts?.map((post)=>( 
         <Card title={post.title} description={post.description} image={post.urlToImage} date={post.publishedAt} url={post.url}/>
         )
        )}</div>
    </div>
  )
}

export default News
