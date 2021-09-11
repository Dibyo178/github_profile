import React, { useEffect, useState } from "react";
// import UserDetails from '../../UserDetails/UserDetails';
import Navbar from "../Navbar/Navbar";
import UserDetails from "./../../UserDetails/UserDetails";

const Heder = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const url = `https://api.github.com/users/Dibyo178`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRepo(data);
      });
  }, []);

  return (
    <div>
      <Navbar repo={repo} setRepo={setRepo} />
      <UserDetails repo={repo} />
    </div>
  );
};

export default Heder;
