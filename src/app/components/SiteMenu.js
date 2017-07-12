import React from 'react';
import MenuItem from '../components/MenuItem';

class SiteMenu extends React.Component
{
    render()
    {
        let menus = this.props.menus.map((menu, index) => {
            console.log(menu.title);
            return <MenuItem
                id={menu.id}
                title={menu.title}
                uri={menu.uri}
                key={index}
            />
        });
        return (
                  <ul className="col-md-7 nav nav-pills top-menu">{menus}</ul>              
        );
    }
}

export default SiteMenu;
