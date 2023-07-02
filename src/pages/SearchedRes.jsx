import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const SearchedRes = () => {
  const [searchRes, setSearchRes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=2839415d50b1438294b5bad8e663f689&query=${name}`
    );
    const recipes = await data.json();
    setSearchRes(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getSearched(params.input);
  }, [params.input]);
  return (
    <Grid>
      {searchRes.map((item) => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color: black;
  }
`;
export default SearchedRes;
