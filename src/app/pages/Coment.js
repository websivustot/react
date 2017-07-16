import React from 'react';
import ComentProfile from '../components/Coment';
import axios from 'axios';

export default class Coment extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      coment: null
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
      .then((response) => {
        let { data } = response;

        this.setState({
          coment: data
        });
        
      })
  }
  render(){

    return(
      <div>
        {this.state.coment && <ComentProfile {...this.state.coment} />}
      </div>
    );
  }
}
