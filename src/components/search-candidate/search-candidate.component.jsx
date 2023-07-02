import { useState, useEffect } from "react";
import "./search-candidate.styles.css";
import Card from "../card/card.component";

const SearchCandidate = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      setMonsters(users);
    })
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

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
                <form>
                    <input 
                        className="search-box" 
                        type="text" 
                        placeholder="Search Candidate"
                        onChange={onSearchChange}
                    />
                </form>
            </div>

            <div className="card-list">
                {
                    filteredMonsters.map((monster) => {
                        return <Card monster={monster} />
                    })
                }
            </div>
        </div>
    ));
    
}

export default SearchCandidate;