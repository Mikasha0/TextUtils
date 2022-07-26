import React from 'react'

export default function Signin() {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Log In </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label> <i className="fas fa-user"></i> Full Name:</label>
                                <input type="text" name="" className="form-control my-2"/>
                            </div>
                            <div className="form-group my-3">
                                <label><i className="fas fa-envelope"></i> Email or <i className="fas fa-phone"></i>
                                    Phone:</label>
                                <input type="text" name="" className="form-control my-2"/>
                            </div>
                            <div className="form-group my-3">
                                <label><i className="fas fa-lock"></i> Password:</label>
                                <input type="password" name="" className="form-control my-2"/>
                            </div>

                            <div className="button">
                                <button className="btn btn-danger btnn my-3" data-dismiss="modal">Log In</button>
                            </div>
                            <div className="social-links">
                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-google"></i></a>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
