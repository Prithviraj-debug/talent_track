import './benefits.styles.css';

const Benefits = () => {
    return (
        <div className="benefits">
            <h2>Benefits of Our Online Recruitment Solution</h2>
            <div className="benefits__container">
                <div className="benefit">
                    <h3>Increased Efficiency</h3>
                    <p>Our online recruitment solution empowers you to streamline your hiring process, saving valuable time and resources. With automated processes and intuitive tools, you can focus on evaluating and selecting the best candidates, enhancing your overall productivity.</p>
                </div>
                <div className="benefit">
                        <h3>Expanded Reach</h3>
                        <p> Reach a wider talent pool by leveraging the power of online recruitment. Our platform maximizes your job visibility, ensuring your openings are seen by qualified candidates, both locally and globally. Expand your reach and discover talent that was previously inaccessible.</p>
                </div>
                <div className="benefit">
                        <h3>Enhanced Collaboration</h3>
                        <p>Foster effective collaboration within your hiring team. Our platform facilitates seamless communication, document sharing, and evaluation tracking, promoting a collaborative and efficient hiring workflow.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits;