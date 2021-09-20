import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const NavBar = () => {


    const history = useHistory();
    const logout = () => {
        window.sessionStorage.removeItem("user_id");
        window.sessionStorage.removeItem("user_name");
        window.sessionStorage.removeItem("user_email");
        window.sessionStorage.removeItem("user_password");
        window.sessionStorage.removeItem("user_role");
        let path = `/`;
        history.push(path);
    }


    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3 ">
                    <div className="d-flex justify-content-between">
                        <Link to={window.sessionStorage.getItem("user_id") ? "/home" : "/"}>
                            <h1 className="text-primary">logo</h1>
                        </Link>

                        {window.sessionStorage.getItem("user_id") ?<button className="btn btn-light btn-lg px-5" onClick={() => logout()}>logout</button> : ''}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
