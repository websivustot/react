import React from 'react';

class SiteLoginButton extends React.Component
{
    render()
    {
        return (
          <div className="col-md-2 login">
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Login
          </button>
          </div>



        );
    }
}

export default SiteLoginButton;
