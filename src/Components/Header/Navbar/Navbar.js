import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = ({ repo, setRepo }) => {
  const { name, avatar_url } = repo;

  const [search, inputSearch] = useState("");

  console.log(repo);
  const handleChange = (e) => {
    inputSearch(e.target.value);
    e.preventDefault();
  };

  const handleClick = () => {
    // console.log(search)
    const url = `https://api.github.com/users/${search}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRepo(data);
        inputSearch("");
      });
  };
  // console.log(repo)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="wrapper">
          <div className="search-input">
            <input
              value={search}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="UserName"
              style={{ width: "200px", margin: "10px" }}
            />
          </div>
        </div>
        <button
          style={{ marginLeft: "5px" }}
          onClick={handleClick}
          className="btn btn-success search-btn"
        >
          Search
        </button>

        <div className="header ml-auto">
          <h3 style={{ color: "white" }}>{name}</h3>
          {/* <img src="https://avatars.githubusercontent.com/u/39717099?v=4" */}
          <img
            src={avatar_url}
            width="50px"
            height="50px"
            style={{ marginLeft: "50px" }}
            alt=""
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
