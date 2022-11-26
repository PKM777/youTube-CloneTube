import styled from "styled-components";
import React from "react";

const Comment = () => {
  return (
    <Container>
      <Avatar src="" alt="" />
      <Details>
        <Name>
          Jhan Bob <Dates>1 Day ago</Dates>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, con lorem ipsum
          dolor sit amet, consectetur adip
        </Text>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.Text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Dates = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 12px;
`;

export default Comment;
