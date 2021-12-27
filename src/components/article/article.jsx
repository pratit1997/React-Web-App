import React from 'react'
import './article.css'; 

const article = ({ imgUrl, date, text,url }) => {
    return (
        <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href={url}  ><p>Read Full Article</p></a>
    </div>
  </div>
    )
}

export default article

