import React from 'react'
import Article from '../../components/article/article';
import './Blog.css';

export default class Blog extends React.Component {
    state = {
        loading: true,
        artical: null
      };
    
      async componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=omicron&from=2021-11-26&sortBy=publishedAt&apiKey=a9f9e4f3e6854b39a4cb1067540c9f0e";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ artical: data, loading: false });
        // console.log(this.state.artical.urlToImage)
      }
    
      render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.artical) {
          return <div>didn't get  any Article</div>;
        }
        return (
        
                    <div className="gpt3__blog section__padding" id="blog">
                <div className="gpt3__blog-heading">
                  <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
                </div>
                <div className="gpt3__blog-container">
                  <div className="gpt3__blog-container_groupA">
                      {console.log(this.state.artical.articles[2])}
                    <Article imgUrl={this.state.artical.articles[0].urlToImage} date={this.state.artical.articles[0].publishedAt} text={this.state.artical.articles[0].content} url={this.state.artical.articles[0].url}/>
                  </div>
                  <div className="gpt3__blog-container_groupB">
                      
                  <Article imgUrl={this.state.artical.articles[1].urlToImage} date={this.state.artical.articles[1].publishedAt} text={this.state.artical.articles[1].title} url={this.state.artical.articles[1].url}/>
                   <Article imgUrl={this.state.artical.articles[2].urlToImage} date={this.state.artical.articles[2].publishedAt} text={this.state.artical.articles[2].title} url={this.state.artical.articles[2].url}/>
                   <Article imgUrl={this.state.artical.articles[3].urlToImage} date={this.state.artical.articles[3].publishedAt} text={this.state.artical.articles[3].title} url={this.state.artical.articles[3].url}/>
                   <Article imgUrl={this.state.artical.articles[4].urlToImage} date={this.state.artical.articles[4].publishedAt} text={this.state.artical.articles[4].title} url={this.state.artical.articles[4].url}/>
                  </div>
                </div>
              </div>
                )
   
      }
    }


