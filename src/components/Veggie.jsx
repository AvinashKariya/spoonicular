import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Veggie = () => {
  const [veggi, setVeggie] = useState([]);

  const getVeggi = async () => {
    const check = sessionStorage.getItem("veggi");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=2839415d50b1438294b5bad8e663f689&number=20&tags=vegetarian`
      );
      const data = await api.json();
      sessionStorage.setItem("veggi", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggi();
  }, []);
  return (
    <Wrappeer>
      <TextWrapper>
        <h3>Our Vegetarian Picks</h3>
      </TextWrapper>
      <Splide
        options={{
          perPage: 3,
          drag: "free",
          gap: "1rem",
          rewindByDrag: true,
          rewind: true,
        }}
      >
        {veggi?.map((item) => (
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
  margin: 4rem 0rem;
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
    color: #13d128;
  }
`;

const Card = styled.div`
  min-height: 15rem;
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
export default Veggie;
