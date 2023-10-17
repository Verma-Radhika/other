import React, { useEffect, useState } from "react";
import "../../Styles/allUser.css";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { apiurl } from "../../App";
import { BsJustify } from "react-icons/bs";

export const AllUser = () => {
  // const dataUser = [
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  //   },
  //   {
  //     name: "Neeraj Singh",
  //     profile: "Jobsmart HR Solutions",
  //     img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
  //   },
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
  //   },
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  //   },
  //   {
  //     name: "Neeraj Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
  //   },
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
  //   },
  // ];

  return (
    <>
      {/* <div class="container" style={{marginTop:"100px"}}>
        <div class="row"> */}
      <div class="col-lg-12" style={{ marginTop: "100px" }}>
        <div class="main-box clearfix">
          <div class="table-responsive">
            <table class="table user-list">
              <thead>
                <tr>
                  <th>
                    <span>User</span>
                  </th>
                  <th>
                    <span>Created</span>
                  </th>
                  <th class="text-center">
                    <span>Status</span>
                  </th>
                  <th>
                    <span>Email</span>
                  </th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                    <a href="#" class="user-link">
                      Mila Kunis
                    </a>
                    <span class="user-subhead">Admin</span>
                  </td>
                  <td>2013/08/08</td>
                  <td class="text-center">
                    <span class="label label-default">Inactive</span>
                  </td>
                  <td>
                    <a href="#">mila@kunis.com</a>
                  </td>
                  <td style={{ width: "20%" }}>
                    <a href="#" class="table-link">
                      <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#" class="table-link">
                      <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#" class="table-link danger">
                      <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                    />
                    <a href="#" class="user-link">
                      George Clooney
                    </a>
                    <span class="user-subhead">Member</span>
                  </td>
                  <td>2013/08/12</td>
                  <td class="text-center">
                    <span class="label label-success">Active</span>
                  </td>
                  <td>
                    <a href="#">marlon@brando.com</a>
                  </td>
                  <td style={{ width: "20%" }}>
                    <a href="#" class="table-link">
                      <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#" class="table-link">
                      <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a href="#" class="table-link danger">
                      <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
      {/* // ............................................. */}

      <div className="allUser_container">
        <div>
          <h2>All filter try it Here ...</h2>
        </div>

        <div
          className="searchInput"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            className="search"
            id="search"
            type="search"
            placeholder="Search..."
            autofocus
            required
          />
          <button className="searchBtn" type="submit">
            Go
          </button>
        </div>

        {/* .................... */}
        {/* </div> */}
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col ">User Image</div>
            <div className="col ">User Name</div>
            <div className="col ">email Id</div>
            <div className="col ">Phone Number</div>
            <div className="col ">Delete</div>
          </li>
          {blogData?.map((el, index) => (
            <Link to={`/user/profile/${el._id}`}>
              <li className="table-row " key={index}>
                <div className="col col-1">
                  <img
                    className="userImg"
                    src={
                      "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                    }
                    width={"20px"}
                    height={"20px"}
                    alt="logo _error"
                  />
                  {/* <img src={`${apiurl}/images/${el.image}`} alt="" /> */}
                </div>
                <div className="col col-2" data-label=" Name">
                  {el.name}{" "}
                </div>
                <div className="col col-3" data-label="Email Id">
                  {el.email}
                </div>
                <div className="col col-3" data-label="Email Id">
                  {el.phoneNumber ? el.phoneNumber : "No Number"}
                </div>
                <div className="col col-3" style={{ fontSize: "30px" }}>
                  <AiFillDelete />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
