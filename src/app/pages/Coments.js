import React from 'react';
import ComentsList from '../components/ComentsList';
import { Link } from 'react-router';


export default class Coments extends React.Component {
  render(){
    return(
      <div>        
      {
        (!this.props.children) ?
        (<ComentsList/>)
        :
        (this.props.children)
      }
      </div>
    );
  }
}
