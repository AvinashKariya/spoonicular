import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Desserts = () => {
  const [dessert, setDessert] = useState([]);
  const getDessert = async () => {
    const check = sessionStorage.getItem("dessert");

    if (check) {
      setDessert(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=2839415d50b1438294b5bad8e663f689&number=20&tags=dessert`
      );
      const data = await api.json();
      sessionStorage.setItem("dessert", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setDessert(data.recipes);
    }
  };

  useEffect(() => {
    getDessert();
  }, []);
  return (
    <Wrappeer>
      <TextWrapper>
        <h3>Our Desserts</h3>
      </TextWrapper>
      <Splide
        options={{
          perPage: 4,
          drag: "free",
          gap: "2rem",
          rewindByDrag: true,
          rewind: true,
        }}
      >
        {dessert?.map((item) => (
          <SplideSlide key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <Card>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Wrappeer>
  );
};

const Wrappeer = styled.div`
  margin: 3rem 0rem;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  h3 {
    font-size: 20px;
    color: #ffaa00;
  }
`;

const Card = styled.div`
  min-height: 17rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  p {
    position: absolute;
    left: 50%;
    bottom: 0%;
    z-index: 10;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    font-size: 20px;
    padding: 10px;
  }
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Desserts;
