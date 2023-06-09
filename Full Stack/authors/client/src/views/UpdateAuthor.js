import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateAuthor = (props) => {
  const { id } = props;
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [author, setAuthor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/authors/${id}`)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((error) => {
        navigate("/error");
      });
  }, [id]);

  const updateAuthor = (author) => {
    axios
      .put(`http://localhost:8000/authors/${id}`, author)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorResponse = error.response.data.errors;

        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="container text-center">
      <div className="container text-left">
        <Link to="/">Home</Link>
      </div>
      <h1>Favorite Authors</h1>
      <h5>Edit author:</h5>
      {errors.map((error, index) => (
        <p className="text-danger" key={index}>
          {error}
        </p>
      ))}
      {loaded && (
        <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
      )}
    </div>
  );
};

export default UpdateAuthor;
