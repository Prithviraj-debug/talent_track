import { useState } from "react"

const CandidateDetails = (props) => {
    const [candidate, setCandidate] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/user/${props.match.params.id}`)
        .then((res) => res.json())
        .then((data) => {
            setCandidate(data);
        })
    }, [id]);

    const { username, email, image, address, company } = candidate;

    return (
        <div className="candidate-details-container">
            <div className="candidate-details">
                <div className="candidate-details__image">
                    <img src={image} alt={`user ${username}`} />
                </div>
                <div className="candidate-details__info">
                    <h1>{username}</h1>
                    <p>{email}</p>
                    <p>{address}</p>
                    <p>{company}</p>
                </div>
            </div>
        </div>
    );
}

export default CandidateDetails;