import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  width: ${(props) =>
    props.type === "sm" ? "100%" : "300px"}; /* Full width for 'sm' */
  margin-bottom: ${(props) => (props.type === "sm" ? "20px" : "30px")};
  cursor: pointer;
  display: ${(props) => (props.type === "sm" ? "flex" : "block")};
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.bgLighter};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.dim};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.glow};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 1px 8px 20px ${({ theme }) => theme.glowBright};
  }
`;

const Image = styled.img`
  width: ${(props) =>
    props.type === "sm"
      ? "40%"
      : "100%"}; /* Left-aligned smaller image for 'sm' */
  height: ${(props) => (props.type === "sm" ? "120px" : "170px")};
  background-color: #999;
  object-fit: cover;
  border-radius: ${(props) =>
    props.type === "sm" ? "12px 0px 0px 12px" : "12px 12px 0 0"};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => (props.type === "sm" ? "0 10px" : "10px")};
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f1ebeb;
  display: ${(props) =>
    props.type === "sm" && "none"}; /* Hide channel image for 'sm' */
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 7px 0px;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchChannels = async () => {
      const res = await axios.get(
        `https://video-streaming-backend-8lgu.onrender.com/api/users/find/${video.userId}`
      );
      setChannel(res.data);
    };

    fetchChannels();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl || "/img/imagenotfound.png"} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel.img || "img/no_image_available.png"}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
