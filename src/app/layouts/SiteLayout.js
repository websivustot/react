import React from 'react';
import SiteLogo from '../components/SiteLogo';
import SiteMenu from '../components/SiteMenu';
import SiteContent from '../components/SiteContent';

class SiteLayout extends React.Component
{
    render()
    {
        console.log(this.props.site.content[0].text);
        return (
            <div className="app">
                <SiteLogo />
                <SiteMenu />
                <SiteContent content={this.props.site.content[0].text} />
            </div>
        );
    }
}

export default SiteLayout;
