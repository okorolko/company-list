import "./App.css";
import { useCompany } from "./hooks";
import { useState } from "react";

const TAGS = ["Plumbing", "Excavation", "Electrical"];

function App() {
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const company = useCompany({ tags: tags.length ? tags : null, search });

  function handleTagToggle(tag) {
    if (tags.includes(tag)) {
      setTags((prevState) => prevState.filter((currTag) => currTag !== tag));
    } else {
      setTags([...tags, tag]);
    }
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for company..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="tag-container">
        {TAGS.map((tag) => {
          return (
            <label key={tag} className="tag">
              <input
                type="checkbox"
                name={tag}
                value={tag}
                onChange={(e) => {
                  handleTagToggle(e.target.value);
                }}
              />
              {tag}
            </label>
          );
        })}
      </div>
      <div className="list-container">
        {company.data && company.data.length
          ? company.data.map((company) => {
              return (
                <div key={company.id} className="company-card">
                  <div className="company-card-module">
                    <span className="company-name">{company.name}</span>
                    <span className="company-city">City: {company.city}</span>
                  </div>
                  <img src={company.logo} className="company-logo" alt="logo" />
                </div>
              );
            })
          : "No companies found :("}
      </div>
    </div>
  );
}

export default App;
