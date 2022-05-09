import React from "react";
import MovieFooter from "../components/footerMovie";
import SampleMovie from "./sampleData";

export default {
  title: "Movie Details Page/MovieFooter",
  component: MovieFooter,
};

export const Basic = () => <MovieFooter movie={SampleMovie} />;
Basic.storyName = "Default";