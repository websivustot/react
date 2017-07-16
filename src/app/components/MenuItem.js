import React from 'react';
import { Link } from 'react-router';

class MenuItem extends React.Component
{
    render()
    {

        return (
                <li className={this.props.active ? 'active' : ''}>
                  <Link to={this.props.href}>
                    {this.props.children}
                  </Link>
                </li>
        );
    }
}

export default MenuItem;
