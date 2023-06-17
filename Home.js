import React from "react";
import Slider from './components/slider.js';
import ContainerCard from "./components/ContainerCard.js";
import Svges from "./components/svgFor.js";
import FormComponent from "./components/FormComponent.js";

export const Home = () => (
    <div>
        <Slider />
        <Svges />
        <ContainerCard />
        <FormComponent />
    </div>
)