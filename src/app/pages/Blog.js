import React from 'react';
import BlogProfile from '../components/Blog';
import axios from 'axios';

export default class Blog extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      blog: null
    }
    console.log(this.props.params);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.blogId}`)
      .then((response) => {
        let { data } = response;
        console.log(data);
        this.setState({
          blog: data
        });

      })
  }
  render(){

    return(
      <div>
        {this.state.blog && <BlogProfile {...this.state.blog} />}
      </div>
    );
  }
}
