import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.btnMode} bg-${props.btnMode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"  href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutText}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">{props.registerText}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/validation">validation</a>
                        </li>
                    </ul>
                    {/* <div className="d-flex">
                        <div className="bg-primary round mx-2" onClick={()=>{props.toggleBtn('primary')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
                        <div className="bg-warning round mx-2" onClick={()=>{props.toggleBtn('warning')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
                        <div className="bg-success round mx-2" onClick={()=>{props.toggleBtn('success')}} style={{height:'25px', width:'25px', cursor:'pointer'}}></div>
                    </div> */}
                    <button type="button" className="btn btn-primary btn-sm mx-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Log In</button>
                    <div className={`form-check form-switch text-${props.btnMode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input " style={{height:'30px',width:'50px'}} onClick={() => { props.toggleBtn(null) }} type="checkbox"  role="switch" id="flexSwitchCheckDefault" />
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    registerText:PropTypes.string
}

Navbar.defaultProps = {
    title: "set title here",
    aboutText: "set aboutText here",
    registerText:"set registerText here"
}