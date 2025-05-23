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
        <nav className="shadow navbar navbar-expand-lg  bg-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/"><h4>Home</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    {/* <a className="nav-link" href="#">Link</a> */}
                    </li>

                </ul>
                <form className="d-flex" role="search">
                    <Link to='/dashboard/addlead'><button className='btn btn-outline-primary fw-bold'>New Lead</button></Link>
                    <button className="btn btn-outline-light ms-2 fw-bold" style={{}} type="submit" onClick={()=>{logout()}}>Logout</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
