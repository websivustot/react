import React from 'react';
import SiteLogo from '../components/SiteLogo';
import SiteMenu from '../components/SiteMenu';
import MenuItem from '../components/MenuItem';
import SiteLeftMenu from '../components/SiteLeftMenu';
import SiteContent from '../components/SiteContent';
import SiteLoginButton from '../components/SiteLoginButton';
import SiteLoginModal from '../components/SiteLoginModal';


class SiteLayout extends React.Component
{
  constructor(){
    super(...arguments);
    this.logo = 'SiteLogo';
}
isActive (href){
  return window.location.pathname === href;
}
  render()
    {
        return (
            <div className="container">
              <div className="navbar navbar-default">
                <SiteLogo logo={this.logo} />
                  <SiteMenu>
                    <MenuItem href="/" active={this.isActive('/')}>
                      Main
                    </MenuItem>
                    <MenuItem href="/blogs" active={this.isActive('/blogs')}>
                      Blog
                    </MenuItem>
                    <MenuItem href="/comments" active={this.isActive('/comments')}>
                      Comments
                    </MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>
                      Users
                    </MenuItem>
                  </SiteMenu>
                <SiteLoginButton />
              </div>
              <div>
                {this.props.children}
              </div>
              <footer className="navbar navbar-default col-md-12"><p>Copyright 2017 SiteName</p></footer>
              <SiteLoginModal />
            </div>
        );
    }
}

export default SiteLayout;
