import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        img: "180feb8fcdf15ffad84faad10761a352.jpg",
        title: "Flaunting the MAKERS",
        description: "Set off a chain reaction with statement styles that boast large profiles and embellished details.",
    },
    {
        img: "b1085aea7a884e726fcff63e3ddd6f44.jpg",
        title: "Creating Timelesf classic Drapes",
        description: "Set off a chain reaction with statement styles that boast large profiles and embellished details.",
    },
    {
        img: "Explore the Ethnic Facet of Fashion.png",
        title: "Best of the Best",
        description: "Set off a chain reaction with statement styles that boast large profiles and embellished details."
    }
]


const sliderSlice = createSlice({
    name:"slider",
    initialState,
    reducers : {}

})

export default sliderSlice.reducer;