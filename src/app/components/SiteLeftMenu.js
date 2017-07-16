import React from 'react';
import MenuItem from '../components/MenuItem';

class SiteLeftMenu extends React.Component
{
    render()
    {
        let menus = this.props.menus.map((menu, index) => {
            //console.log(menu.title);
            return <MenuItem
                id={menu.id}
                title={menu.title}
                uri={menu.uri}
                key={index}
            />
        });
        return (
                  <div className="navbar navbar-default col-md-2">
                    <ul className="nav nav-stacked">{menus}</ul>
                  </div>
        );
    }
}

export default SiteLeftMenu;
