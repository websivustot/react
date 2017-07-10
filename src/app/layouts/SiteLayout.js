import React from 'react';

class SiteLayout extends React.Component
{
    render()
    {
        return (
            <div className="app">
                <div className="logo"></div>
                <ul className="menu"></ul>
                <div className="content"></div>
            </div>
        );
    }
}

export default SiteLayout;
