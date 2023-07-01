import { Outlet } from "react-router";
import './home.styles.css'
import HomeLeft from "../home-left/home-left.component";
import HomeRight from "../home-right/home-right.component";
import down from '../../assets/down.png'
import img from '../../assets/img.png'
import search from '../../assets/search.png'
import job from '../../assets/job.png'
import business from '../../assets/business.png'
import post from '../../assets/post.png'
import CTA from "../CTA/CTA.component";
import Clients from "../clients/clients.component";
import Footer from "../footer/footer.component";
import Benefits from "../benefits/benefits.component";

const Home = () => {

    return (
        <div className="home">
                <Outlet />
            <div className="home-container">
                <HomeLeft heading={["Revolutionize Your ", <span>Hiring </span>, "Process"]} desc="Welcome to our cutting-edge online recruitment solution, designed to streamline and optimize your hiring process. Whether you're a hiring manager or an HR professional, our platform offers a range of powerful features to help you find the best talent efficiently and effectively. From posting jobs to managing applications, our platform has you covered." subHead="with Our Online Recruitment Solution" button={{ divClass: "exploreMore", imgClass: "down", imgSrc: down, imgAlt: "down image", btnText: "Explore More" }} />

                <HomeRight img={img} stats={true} />
                <div className="shader3" />
            </div>

            <div id="sectionTwo" className="home-container inverted">
                <HomeLeft heading={["Advanced  ", <span>Candidate </span>, "Search"]} desc="Our intelligent search algorithms allow you to quickly filter through a vast pool of candidates, enabling you to find the perfect fit for your organization. Save time and effort by easily narrowing down your search based on specific qualifications, experience, and skills." button={{ divClass: "exploreMore", imgClass: "down", imgSrc: search, imgAlt: "search image", btnText: "Search Now", linkTo: '/find' }} />

                <HomeRight img={business} stats={false} />
                <div className="shader3" />
            </div>

            <div className="home-container">
                <HomeLeft heading={["Automated ", <span>Job </span>, "Posting"]} desc="Say goodbye to the hassle of manually posting job openings across multiple platforms. With our online recruitment solution, you can effortlessly create and distribute job postings to various job boards, social media platforms, and industry-specific websites, reaching a wider audience and attracting top talent." subHead="" button={{ divClass: "exploreMore", imgClass: "down", imgSrc: post, imgAlt: "down image", btnText: "Post Now", linkTo: '/signin' }} />

                <HomeRight img={job} stats={false} />
                <div className="shader3" />
            </div>

            <Benefits />
            
            <Clients />

            <CTA />

            <Footer />
        </div>
    );
}   

export default Home;