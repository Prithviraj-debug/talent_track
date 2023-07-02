import { Link } from "react-router-dom";

const HomeLeft = (props) => {
    const { heading, desc, subHead, ...button } = props;
    const { divClass, imgSrc, imgClass, imgAlt, btnText, linkTo } = button.button;

    const handleButtonClick = () => {
        console.log("clicked");
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth', 
        });
      };

    return (
        <div className="home-left">
            <h1>{heading}</h1>
            <p className="sub-heading">{subHead}</p>
            <p className="desc">{desc}</p>

            {
                button && (
                    <div className={`${divClass}`}>
                        <Link to={linkTo}>
                            <button onClick={handleButtonClick}>
                                {btnText}
                                <img className={`${imgClass}`} src={imgSrc} alt={`${imgAlt}`} />
                            </button>
                        </Link>
                    </div>
                )
            }
            
        </div>
    )
}

export default HomeLeft;