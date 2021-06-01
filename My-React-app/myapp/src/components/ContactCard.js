import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jfif";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="avatar image" src={user} alt="user" width="55px"/>
      <div className="content">
        <Link to={
          // Goto contact id details
            { pathname: `/contact/${id}`, state: { contact: props.contact } }
          }>
          <div className="ui header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={
          { color: "red", marginTop: "7px", marginLeft: "10px" }
        }
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={
        // Goto Edit Contacts
        { pathname: `/edit`, state: { contact: props.contact } }
        }>
        <i
          className="edit alternate outline icon"
          style={
            { color: "blue", marginTop: "7px" }
          }
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;