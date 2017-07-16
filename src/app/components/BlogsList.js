import React from 'react';
import Blog from './Blog';
import axios from 'axios';

export default class BlogsList extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      blogs: []
    }

    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        let { data } = response;
        this.setState({
          blogs: data
        });

      })

  }
  render(){
    if (!this.state.blogs.length) {
      return (null);
    }

    let blogs = this.state.blogs.map((blog, index) => {
        return <Blog key={index} {...blog} />
      });

    return(
      <div>
        <h1>Blogs</h1>
        {blogs}
      </div>
    );
  }
}
