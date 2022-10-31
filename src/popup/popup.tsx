import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import { fetchOpenWeatherData } from "../utils/api";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import WeatherCard from "./WeatherCard/WeatherCard";
import { InputBase, IconButton, Paper, Box, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const App = () => {
  const [cities, setCities] = useState<string[]>([
    "Los Angeles",
    "Zermatt",
    "Temecula",
    "Error",
  ]);

  const [cityInput, setCityInput] = useState<string>("");

  const handleCitySubmit = () => {
    if (cityInput === "") return;

    setCities([...cities, cityInput]);
    setCityInput("");
  };

  const handleCityDelete = (index: number) => {
    cities.splice(index, 1);
    setCities([...cities]);
  };

  console.log(cityInput);

  return (
    <Box mx={"8px"} my={"16px"}>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <Paper>
            <Box
              px={"15px"}
              py={"5px"}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <InputBase
                placeholder={"Add a city name"}
                value={cityInput}
                onChange={(event) => {
                  setCityInput(event.target.value);
                }}
              />
              <IconButton onClick={handleCitySubmit}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((nameOfCity, index) => (
        <WeatherCard
          city={nameOfCity}
          key={index}
          onDelete={() => handleCityDelete(index)}
        />
      ))}
      <Box height={"16px"} />
    </Box>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container!);
root.render(<App />);
