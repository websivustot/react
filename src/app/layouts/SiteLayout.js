import React from 'react';
import SiteLogo from '../components/SiteLogo';
import SiteMenu from '../components/SiteMenu';
import SiteContent from '../components/SiteContent';

class SiteLayout extends React.Component
{
    render()
    {
        return (
            <div className="app">
                <SiteLogo />
                <SiteMenu />
                <SiteContent />
            </div>
        );
    }
}

export default SiteLayout;
