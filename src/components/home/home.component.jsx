import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router";
import img from '../../assets/img.png'
import down from '../../assets/down.png'
import './home.styles.css'

const Home = () => {

    return (
        <div className="home">
                <Outlet />
            <div className="home-container">
                <div className="home-left">
                    <h1>Revolutionize Your <span>Hiring </span>Process</h1>
                    <p className="sub-heading"> with Our Online Recruitment Solution</p>
                    <p className="desc">
                    Welcome to our cutting-edge online recruitment solution, designed to streamline and optimize your hiring process. Whether you're a hiring manager or an HR professional, our platform offers a range of powerful features to help you find the best talent efficiently and effectively. From posting jobs to managing applications, our platform has you covered.
                    </p>

                    <div className="exploreMore">
                        <button>
                    Explore More
                    <img className="down" src={down} alt="down" />
                        </button>
                    </div>
                </div>
                <div className="home-right">
                    <img src={img} alt="" />
                    <div className="stats">
                        <div>
                            <h2>3000+</h2>
                            <p>Jobs Posted</p>
                        </div>
                        <div>
                            <h2>1000+</h2>
                            <p>Companies</p>
                        </div>
                        <div>
                            <h2>10000+</h2>
                            <p>Applications</p>
                        </div>
                    </div>
                </div>
    
                <div className="shader3" />
            </div>

        </div>
    );
}

export default Home;