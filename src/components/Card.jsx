import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image type={type} />
        <Details type={type}>
          <ChannelImage type={type} />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>CloneTube</ChannelName>
            <Info>1M views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "280px"};
  display: ${(props) => props.type === "sm" && "flex"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  flex: 1;
  height: ${(props) => (props.type === "sm" ? "80px" : "180px")};
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 8px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"}; ;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

export default Card;
