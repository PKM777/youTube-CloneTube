import styled from "styled-components";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" />
            <SearchIcon />
          </Search>
          <Link to="signin" state={{ textDecoration: "none" }}>
            <Button>
              <LoginIcon />
              SIGN IN
            </Button>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 55px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  display: flex;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export default Navbar;
