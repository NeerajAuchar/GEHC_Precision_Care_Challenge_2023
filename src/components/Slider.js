import React from 'react'
import ReactCardSlider from "react-card-slider-component";
import Chart from './Chart';

const Slider = () => {
    const slides = [
        
        {
          image: <Chart/>,
          title: "This is a second title 2",
          description: "This is a second description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 3",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 4",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 5",
          description: "This is a third description",
          clickEvent: "sliderClick"
        },
        {
          image: "https://picsum.photos/700/600",
          title: "This is a third title 6",
          description: "This is a third description",
          clickEvent: "sliderClick"
        }
      ];
  return (
    <div className='slider'><ReactCardSlider slides={slides} /></div>
  )
}

export default Slider