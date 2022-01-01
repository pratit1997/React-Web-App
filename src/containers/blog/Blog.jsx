import React from 'react'
import Article from '../../components/article/article';
import './Blog.css';

export default class Blog extends React.Component {
    state = {
        loading: true,
        artical: null
      };
    
      async componentDidMount() {
        // const url = "https://newsapi.org/v2/everything?q=omicron&from=2021-11-30&sortBy=publishedAt&apiKey=a9f9e4f3e6854b39a4cb1067540c9f0e";
       const url="http://api.mediastack.com/v1/news?access_key=b2e539219d1ed08190318fafd4954b1c&keywords=covid&countries=ca&%20languages%20=%20en &source=ctv";
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
                      {/* {console.log(this.state.artical.articles[2])} */}
                    <Article imgUrl={this.state.artical.data[0].image} date={this.state.artical.data[0].published_at} text={this.state.artical.data[0].description} url={this.state.artical.data[0].url}/>
                  </div>
                  <div className="gpt3__blog-container_groupB">
                      
                   <Article imgUrl={this.state.artical.data[1].image} date={this.state.artical.data[1].published_at} text={this.state.artical.data[1].description} url={this.state.artical.data[1].url}/>
                    <Article imgUrl={this.state.artical.data[2].image} date={this.state.artical.data[2].published_at} text={this.state.artical.data[2].description} url={this.state.artical.data[2].url}/>
                     <Article imgUrl={this.state.artical.data[3].image} date={this.state.artical.data[3].published_at} text={this.state.artical.data[3].description} url={this.state.artical.data[3].url}/>
                      <Article imgUrl={this.state.artical.data[4].image} date={this.state.artical.data[4].published_at} text={this.state.artical.data[4].description} url={this.state.artical.data[4].url}/>
                  </div>
                </div>
              </div>
                )
   
      }
    }


