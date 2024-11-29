import React, { useCallback, useEffect, useState } from "react";
import Banner from "./Banner.tsx";
import { Outlet } from 'react-router-dom';

import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  instructions?: [];
  secondaryMuscles: {
    hipflexors: string;
    lowerback: string;
  };
}
const Home = () => {
  const [data, setData] = useState<Exercise[]>([]);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "542a840663mshc54945b4cb96667p1c5ed2jsned8e4f506709",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      }
    );
    try {
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleExercise = useCallback(
    async (id: any) => {
      try {
        navigate(`/exercise/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    [navigate]
  );

  return (
    <div>
      <Banner />
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        gap={10}
      >
        {data.map((item, index) => (
          <Card size={"sm"} onClick={() => handleExercise(item.id)}>
            <CardBody>
              <Image src={item.gifUrl} alt={item.bodyPart} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"gray.500"}>
                  Body Part: {item.bodyPart}
                </Heading>
                <Text>Name:{item.name}</Text>
                <Text fontSize="2xl">Equipment: {item.equipment}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Home;
