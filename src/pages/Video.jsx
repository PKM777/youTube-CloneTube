import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="460"
            src="https://youtube.com/embed/k3Vfj-e1Ma4"
            title="youTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>1,55,555 views . Jun 14, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              676
            </Button>
            <Button>
              <ThumbDownAltIcon />
              Dislike
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
            <Button>
              <SaveAltIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="" alt="" />
            <ChannelDetail>
              <ChannelName>CLone TV</ChannelName>
              <ChannelCounter>60k subscribers</ChannelCounter>
              <Discription>
                Lorem ipsum dolor sit amet, consectetur adip id el Lorem ipsum
                dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
                consectetur adip Lorem ipsum dolor sit amet, consectetur adip
              </Discription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  gap: 20px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.Text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.Text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 8px;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.Text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Discription = styled.p`
  font-size: 14px;
`;

export default Video;
