import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard"; // Import the skeleton component
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 33px;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://video-streaming-backend-8lgu.onrender.com/api/videos/${type}`,
          {
            withCredentials: true,
          }
        );
        setVideos(res.data);
      } catch (err) {
        console.error("Error fetching videos", err);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      {loading
        ? // Display 6 skeleton cards while loading
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} type={type} />
          ))
        : // Once loaded, display the video cards
          videos.map((video) => (
            <Card key={video._id} video={video} type={type} />
          ))}
    </Container>
  );
};

export default Home;
