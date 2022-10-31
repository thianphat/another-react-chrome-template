import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { fetchOpenWeatherData, OpenWeatherData } from "../../utils/api";
import "./WeatherCard.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Grid, Box, Paper, IconButton, InputBase } from "@mui/material";
import {
  Add as AddIcon,
  PictureInPicture as PictureInPictureIcon,
} from "@mui/icons-material";

type WeatherCardProps = {
  city: string;
  onDelete?: () => void;
};

type WeatherCardContainerProps = {
  children?: ReactNode;
  onDelete?: () => void;
};

type WeatherCardState = "loading" | "error" | "ready";

const WeatherCardContainer = ({
  children,
  onDelete,
}: WeatherCardContainerProps) => {
  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>{children}</CardContent>
        <CardActions>
          {onDelete && (
            <Button color={"secondary"} onClick={onDelete}>
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

const WeatherCard = ({ city, onDelete }: WeatherCardProps) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);
  const [cardState, setCardState] = useState<WeatherCardState>("loading");

  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        setWeatherData(data);
        setCardState("ready");
      })
      .catch((err) => setCardState("error"));
  }, [city]);

  if (cardState === "error" || cardState == "loading")
    return (
      <WeatherCardContainer onDelete={onDelete}>
        <Typography variant={"body1"}>
          {cardState === "loading"
            ? "loading..."
            : "Error: something went wrong, please try again!"}
        </Typography>
      </WeatherCardContainer>
    );

  return (
    <WeatherCardContainer onDelete={onDelete}>
      <Typography variant={"h5"}>{weatherData.name}</Typography>
      <Typography variant={"body1"}>
        {Math.round(weatherData.main.temp)}F
      </Typography>
      <Typography variant={"body1"}>
        Feels like: {Math.round(weatherData.main.feels_like)}F
      </Typography>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
