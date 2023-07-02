import { useState, useEffect } from "react";
import "./search-candidate.styles.css";
import Card from "../card/card.component";
import search from "../../assets/search.png";

const SearchCandidate = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchField, setSearchField] = useState('');

  const locations = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
  ];

  const jobTitlles = [
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Data Analyst",
    "Data Engineer",
    "Machine Learning Engineer",
  ]
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      setUsers(users);
    })
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField) || user.address.city.toLocaleLowerCase().includes(searchField) || user.jobTitle.toLocaleLowerCase().includes(searchField);
    });

    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace this with the actual loading time of your assets
  }, []);
    return (
        isLoading ? (
            <div className="loading">
                <div className="loader" />
            </div>
        ) : (
        <div className="search-candidate">
            <div className="search-candidate__form">
                <form className="search-box">
                    <img src={search} alt="search" className="search-icon" />
                    <input 
                        className="search-input"
                        type="search" 
                        placeholder="Search Candidate by Name, City or Job Title"
                        onChange={onSearchChange}
                    />
                </form>
            </div>

            <div className="card-list">
                {
                  filteredUsers.map((user) => {
                    user.jobTitle = jobTitlles[user.id - 1];
                    user.address.city = locations[user.id - 1];
                        return (
                          <Card user={user} />
                        );
                    })
                }
            </div>
        </div>
    ));
    
}

export default SearchCandidate;