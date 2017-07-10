import React from 'react';

class MenuItem extends React.Component
{
    render()
    {
      console.log(this.props.title);
        return (
                <li className="menuitem">
                  <a href={this.props.uri}>
                  {this.props.title}
                  </a>
                </li>
        );
    }
}

export default MenuItem;
