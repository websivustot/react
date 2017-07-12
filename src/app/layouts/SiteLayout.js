import React from 'react';
import SiteLogo from '../components/SiteLogo';
import SiteMenu from '../components/SiteMenu';
import SiteLeftMenu from '../components/SiteLeftMenu';
import SiteContent from '../components/SiteContent';
import SiteLoginButton from '../components/SiteLoginButton';
import SiteLoginModal from '../components/SiteLoginModal';

class SiteLayout extends React.Component
{
    render()
    {
        return (
            <div className="container">
              <div className="navbar navbar-default">
                <SiteLogo logo={this.props.site.logo} />
                <SiteMenu menus={this.props.site.menu} />
                <SiteLoginButton />
              </div>
              <div>
                <SiteLeftMenu menus={this.props.site.sideMenu} />
                <SiteContent content={this.props.site.content[0].text} title={this.props.site.content[0].title} />
              </div>
              <footer className="navbar navbar-default col-md-12"><p>Copyright 2017 SiteName</p></footer>
              <SiteLoginModal />
            </div>
        );
    }
}

export default SiteLayout;
