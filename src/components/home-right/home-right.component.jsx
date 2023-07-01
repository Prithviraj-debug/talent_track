const HomeRight = (props) => {
    const { img, stats } = props;
    return (
        <div className="home-right">
            <img src={img} alt="" />
            {
                stats && (
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
                )
            }
        </div>
    )
}

export default HomeRight;