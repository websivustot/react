import React from 'react';

class SiteContent extends React.Component
{
    render()
    {
        return (
                <div className="col-md-10">
                  <h1>{this.props.title}</h1>
                  <p>{this.props.content}</p>
                </div>
        );
    }
}

export default SiteContent;
