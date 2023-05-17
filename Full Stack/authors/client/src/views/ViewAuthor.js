import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ViewAuthor = (props) => {
  const [author, setAuthor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/authors/" + props.id)
      .then((res) => setAuthor(res.data))
      .catch((err) => navigate("/error"));
  }, [props.id]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="display-3">{author.name}</h3>
      <p>Number of Books: {author.number_of_books}</p>
      <div className="d-inline-flex mt-3">
        <Link to={`/edit/${author._id}`} className="btn btn-primary mr-1">
          {" "}
          Update
        </Link>
        <DeleteButton
          authorId={author._id}
          successCallback={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default ViewAuthor;
