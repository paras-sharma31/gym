import React, { useCallback, useEffect, useState } from "react";
import { Exercise } from "../Home/Home";
import { useParams } from "react-router-dom";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

const SignleExercises = () => {
  const [exercise, setExercise] = useState<Exercise>();
  const { id } = useParams();
  console.log(id, "id");

  const fetchSingleExercise = useCallback(async () => {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
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
      setExercise(result);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchSingleExercise();
  }, [fetchSingleExercise]);

  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          height={100}
          src={exercise?.gifUrl}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{exercise?.name}</Heading>

            <Text py="2">{exercise?.bodyPart}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default SignleExercises;
