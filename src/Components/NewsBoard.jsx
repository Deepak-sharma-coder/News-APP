import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles,setArticles] = useState([])

  useEffect( () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ee6e9ed074704115b631ccf5f5930149`;
;
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles));
  },[category])

  return (
    <div style={{backgroundColor: '#2d2b2bff', border: "5px solid white"}}>
      <h2 className="text-center text-white">Latest <span className="badge bg-danger">News</span></h2>
      {articles?.map((news,index) =>{
         return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard