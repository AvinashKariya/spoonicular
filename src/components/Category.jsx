import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {
  GiNoodles,
  GiChopsticks,
  GiFrenchFries,
  GiIndianPalace,
  GiSpain,
} from "react-icons/gi";
import { SiAirchina } from "react-icons/si";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <Wrapper>
      <SLink to={"/cuisine/Chinese"}>
        <SiAirchina />
        <h4>Chinese</h4>
      </SLink>

      <SLink to={"/cuisine/Indian"}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </SLink>

      <SLink to={"/cuisine/Spanish"}>
        <GiSpain />
        <h4>Spanish</h4>
      </SLink>

      <SLink to={"/cuisine/French"}>
        <GiFrenchFries />
        <h4>French</h4>
      </SLink>

      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>

      <SLink to={"/cuisine/Greek"}>
        <GiChopsticks />
        <h4>Greek</h4>
      </SLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: center;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  margin-right: 2rem;
  text-decoration: none;
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 16px;
    font-weight: 100;
  }
  svg {
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
export default Category;
