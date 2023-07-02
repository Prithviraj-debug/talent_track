import location from './location.png';
import job from './job.png';
import './card.styles.css';

const Card = ({user}) => {

    const { id, name, email, jobTitle, address} = user;
    const { city } = address;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
      <p><img src={location} alt='location: ' /> {city}</p>
      <p><img src={job} alt='job: ' /> {jobTitle}</p>
    </div>
  );
}

export default Card;