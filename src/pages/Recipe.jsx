import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Recipe = () => {
  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=2839415d50b1438294b5bad8e663f689`
    );

    const detailsData = await api.json();
    console.log(detailsData);
    setDetails(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);
  return (
    <DetailWrraper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" ? (
          <div>
            <h3>Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: details.summary }} />
            <h3>Instructions</h3>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        ) : (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrraper>
  );
};

const DetailWrraper = styled.div`
  margin-top: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h3 {
    margin: 2rem 0rem 0.5rem 0rem;
  }
  p {
    font-size: 18px;

    a {
      text-decoration: none;
      color: black;
    }
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;
export default Recipe;
