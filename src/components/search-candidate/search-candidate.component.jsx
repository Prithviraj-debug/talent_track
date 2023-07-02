import { useState, useEffect } from "react";
import "./search-candidate.styles.css";
import Card from "../card/card.component";

const SearchCandidate = () => {

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

    return (
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
    );
}

export default SearchCandidate;