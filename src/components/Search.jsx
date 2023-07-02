import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Search Something'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <FaSearch />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 1rem 16rem;
  position: relative;
  width: 100%;
  input {
    border: none;
    width: 50%;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
