import React from 'react';
import BlogsList from '../components/BlogsList';
import { Link } from 'react-router';


export default class Blogs extends React.Component {
  render(){
    return(

      <div>
      {
        (!this.props.children) ?
        (<BlogsList/>)
        :
        (this.props.children)
      }
      </div>
    );
  }
}
