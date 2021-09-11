import { React } from "react";
import RepositorieDetails from "../RepositorieDetails/RepositorieDetails";
import Tab from "../Tab/Tab";
const userInfo = (props) => {
  const { public_repos, html_url, repos_url } = props.data;

  return (
    <div>
      <Tab publicRepo={public_repos} html_url={html_url} />
      <br />

      <RepositorieDetails repos_url={repos_url} />
    </div>
  );
};

export default userInfo;
