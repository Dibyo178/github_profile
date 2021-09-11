import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsFileEarmarkCode } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscRepoForked } from "react-icons/vsc";
import "./RepositorieDetails.scss";

const RepositorieDetails = ({ repos_url }) => {
  // console.log(repos_url);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(repos_url)
      .then((response) => response.json())
      .then((data) => setRepo(data));
  }, [repos_url]);

  console.log("line no 18", repo);

  return (
    <div className="repositorie">
      {repo.length > 0 &&
        repo.map((item) => (
          <div key={item.id} className="repo ">
            <div>
              <div className="title ">
                <a href={item.owner.html_url}>
                  <RiGitRepositoryLine className="pr-1" />
                  <span>{item.name}</span>
                </a>
              </div>

              <span className="description">{item.description}</span>
            </div>

            <div className="d-flex">
              <div className="subItem">
                <BsFileEarmarkCode className="pr-1" />
                <span>{item.language}</span>
              </div>
              <div className="subItem">
                <AiOutlineStar className="pr-1" />
                <span>{item.stargazers_count}</span>
              </div>
              <div className="subItem">
                <VscRepoForked className="pr-1" />
                <span>{item.forks}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RepositorieDetails;
