import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-6">
                    <h3>Contact:</h3>
                    <address>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos ullam error tempora est! Distinctio beatae et ipsa ex expedita.</p>
                        <i className="fa fa-phone"></i>:+84 19823166
                        <br />
                        <i className="fa fa-envelope fa-lg"></i>: funix@funix.edu.vn
                    </address>
                </div>
                <div className="col-6 p-5">
                    <a href="https://www.facebook.com" className="fa fa-facebook"></a>
                    <a href="https://www.google.com" className="fa fa-google"></a>
                    <a href="https://www.youtube.com" className="fa fa-youtube"></a>
                </div>
            </div>
            <div className="row">
                <div className="text-center">
                    <hr />
                    <h6> Designed by madnessTroy | Version: 1.0.0 | 26/11/2021</h6>
                </div>
            </div>
    </div>
    )
}

export default Footer
