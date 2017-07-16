import React from 'react';

class SiteLoginModal extends React.Component

{
  render()
    {
        return (
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Please, log in</h4>
                      </div>
                      <div className="modal-body">
                        <form>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Your Name</label>
                          <input type="text" className="form-control" id="yourName" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={
                            () => {
                              $('#myModal').modal('hide');
                            }
                          }>Login</button>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}

export default SiteLoginModal;
