import React,{Component} from "react";
import "./style.css";
import {withRouter } from "react-router-dom";

class Footer extends Component 
{
    render() {
        return (
            <div className='Box'>
            <h1 style={{ color: "green",
                        textAlign: "center",
                        marginTop: "-50px" }}>
                GeeksforGeeks: A Computer Science Portal for Geeks
            </h1>
            <div className="Container">
                <div className="Row">
                <div className="Column">
                    <p className="Heading">About Us</p>
                    <a className="Footerlink" href="#">Aim</a >
                    <a className="Footerlink" href="#">Vision</a >
                    <a className="Footerlink" href="#">Testimonials</a >
                </div>
                <div className="Column">
                    <p className="Heading">Services</p>
                    <a className="Footerlink" href="#">Writing</a >
                    <a className="Footerlink" href="#">Internships</a >
                    <a className="Footerlink" href="#">Coding</a >
                    <a className="Footerlink" href="#">Teaching</a >
                </div>
                <div className="Column">
                    <p className="Heading">Contact Us</p>
                    <a className="Footerlink"  href="#">Uttar Pradesh</a >
                    <a className="Footerlink" href="#">Ahemdabad</a >
                    <a className="Footerlink" href="#">Indore</a >
                    <a className="Footerlink" href="#">Mumbai</a >
                </div>
                <div className="Column">
                    <p className="Heading">Social Media</p>
                    <a className="Footerlink" href="#">
                    <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: "10px" }}>
                        Facebook
                        </span>
                    </i>
                    </a>
                    <a className="Footerlink" href="#">
                    <i className="fab fa-instagram">
                        <span style={{ marginLeft: "10px" }}>
                        Instagram
                        </span>
                    </i>
                    </a>
                    <a className="Footerlink" href="#">
                    <i className="fab fa-twitter">
                        <span style={{ marginLeft: "10px" }}>
                        Twitter
                        </span>
                    </i>
                    </a>
                    <a className="Footerlink" href="#">
                    <i className="fab fa-youtube">
                        <span style={{ marginLeft: "10px" }}>
                        Youtube
                        </span>
                    </i>
                    </a>
                </div>
                </div>
            </div>
            </div>
        );
    }
};
export default withRouter(Footer);
