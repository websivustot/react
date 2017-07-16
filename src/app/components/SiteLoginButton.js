import React from 'react';

class SiteLoginButton extends React.Component
{

    render() {
      let loginElement;
      //console.log(this.state);
      if (this.props.loggedIn){
        loginElement = (
          <div>
            Hello {this.props.userName}
          </div>
        )
      } else {
        loginElement = (
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Login
          </button>
        )
      }

        return (
          <div className="col-md-2 login">
          { loginElement }
          </div>



        );
  }
}

export default SiteLoginButton;
