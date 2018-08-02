import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>

                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Thêm Công Việc
                                    <span className="fa fa-time-circle text-right"></span>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form action="" method="POST" role="form">
                                    <div className="form-group">
                                        <label>Tên :</label>
                                        <input type="text" className="form-control" name="name" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>     
                    </div> 
                </div>
            </div>
        );
    }
}

export default App;
