import React from 'react';
import Coment from './Coment';
import axios from 'axios';

export default class ComentsList extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      coments: []
    }

    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        let { data } = response;
        this.setState({
          coments: data
        });

      })

  }
  render(){
    if (!this.state.coments.length) {
      return (null);
    }

    let coments = this.state.coments.map((coment, index) => {
        return <Coment key={index} {...coment} />
      });
      
    return(
      <div>
        <h1>Comments</h1>
        {coments}
      </div>
    );
  }
}
