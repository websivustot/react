import React from 'react';

class SiteContent extends React.Component
{
    render()
    {
        return (
                <div className="content">{this.props.content}</div>
        );
    }
}

export default SiteContent;
