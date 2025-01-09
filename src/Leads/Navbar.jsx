import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
    var navigate = useNavigate();
    function logout(){
        window.localStorage.clear();
        navigate('/');
    }
  return (
    <div>
        <nav className="shadow navbar navbar-expand-lg bg-body-tertiary" style={{background: 'radial-gradient(circle at 10% 20%, rgb(186, 190, 245) 0%, rgb(192, 192, 245) 33.1%, rgb(218, 203, 246) 90%)'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>

                </ul>
                <form className="d-flex" role="search">
                    <Link to='/dashboard/addlead'><button className='btn btn-outline-primary'>New Lead</button></Link>
                    <button className="btn btn-outline-secondary ms-2" style={{}} type="submit" onClick={()=>{logout()}}>Logout</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
