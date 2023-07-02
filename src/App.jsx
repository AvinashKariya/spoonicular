import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { Link, useNavigate } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav>
        <GiKnifeFork
          onClick={() => {
            navigate("/");
          }}
        />
        <Logo to={"/"}>Spoonacular</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;
export default App;
