import React from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import UserInfo from "../UserInfo/UserInfo";
import "./UserDetails.scss";

const UserDetails = (props) => {
  const {
    name,
    avatar_url,
    email,
    followers,
    following,
    location,
    url,
    twitter_username,
  } = props.repo;
  // console.log(props)
  return (
    <div className="user_detail d-flex">
      <div className="col-md-4 person">
        {/* <img src="https://avatars.githubusercontent.com/u/39717099?v=4" */}
        <img
          src={avatar_url}
          className="p-2"
          width="300px"
          height="300px"
          alt="profile"
        />
        <div className="userInfo text-center">
          <h5>{name}</h5>
          <div className="user_infos d-flex">
            <div className="userInfo_detail">
              <span>
                {" "}
                <FaMapMarkerAlt />
                {location}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                {" "}
                <GoGlobe />
                {url}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                {" "}
                <MdEmail />
                {email}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <ImTwitter />
                {twitter_username}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <HiOutlineUserGroup />
                {followers}
              </span>
            </div>
            <div className="userInfo_detail">
              <span>
                <FaHeart />
                {following}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <UserInfo data={props.repo} />
        {/* <userInfo data={props.repo} /> */}
      </div>
    </div>
  );
};

export default UserDetails;
