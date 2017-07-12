import React from 'react';

class SiteLogo extends React.Component
{
    render()
    {
        return (
                <div className="col-md-2">
                  <span className="logo glyphicon glyphicon-apple">
                  <span>{this.props.logo}</span></span>

              </div>
        );
    }
}

export default SiteLogo;
