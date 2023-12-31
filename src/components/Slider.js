import React from "react";
import "../style/Home.css";
import Slider from "@mui/material/Slider";

function MySlider(props) {
  const [slideValue, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    var audio = document.getElementById(props.id);
    audio.play();
    audio.volume = parseFloat(newValue);
  };

  return (
    <div className="Slider">
      <Slider
        className="slider"
        defaultValue={0}
        valueLabelDisplay="auto"
        step={0.1}
        min={0.0}
        max={1.0}
        onChange={handleChange}
      />
      <h2 className="sliderTitle">{props.title}</h2>
      <audio loop id={props.id} src={props.sound}></audio>
    </div>
  );
}

export default MySlider;
