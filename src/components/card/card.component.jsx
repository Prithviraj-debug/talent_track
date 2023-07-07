import location from './location.png';
import job from './job.png';
import './card.styles.css';
import { Link } from 'react-router-dom';
import CandidateDetails from '../candidate-details/candidate-details.component';

const Card = ({user}) => {

    const { id, username, email, image, address, company} = user;
    const { city } = address;
    const { title } = company;
  return (
    <div className="card-container" key={id}>
      <img
        src={image}
        alt={`user ${username}`}
      />
      <h1>{username}</h1>
      <p>{email}</p>
      <p><img src={location} alt='location: ' /> {city}</p>
      <p><img src={job} alt='job: ' /> {title}</p>
    </div>
  );
}

export default Card;