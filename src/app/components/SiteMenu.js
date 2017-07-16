import React from 'react';
import { Link } from 'react-router';

class SiteMenu extends React.Component
{
    render()
    {
        return (
                <ul className="col-md-7 nav nav-pills top-menu">{this.props.children}</ul>                  
        );
    }
}

export default SiteMenu;
