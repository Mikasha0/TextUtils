import React from 'react'

function Body() {
    return (
        <div className="body">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="/carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="/carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="/carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/1400x400/?nature,water" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>“Donate your blood for a reason, let the reason be life”</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/1400x400/?nature,road" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>“Donate your blood for a reason, let the reason be life”</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/1400x400/?nature,air" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>“Donate your blood for a reason, let the reason be life”</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="/carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="/carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <div className="Search row mx-auto" style={{width:'450px'}}>
                <div className="bloodGrp col-lg-6 col-md-6 col-sm-12 my-5">
                    <label htmlFor="fname">Blood Group: </label>
                    <input type="text" placeholder="Search Blood Group" list="bloodgroups" />
                    <datalist id="bloodgroups">
                        <option value="A+ve" />
                        <option value="A-ve" />
                        <option value="B+ve" />
                        <option value="B-ve" />
                        <option value="X-ve" />
                        <option value="O+ve" />
                        <option value="O-ve" />
                    </datalist>

                    <br /><br />
                </div>
                <div className="location col-lg-6 col-md-6 col-sm-12 my-5">
                    <input className="btn btn-primary" type="button" value="Location" />
                </div>

            </div>
        </div>
    )
}

export default Body;
