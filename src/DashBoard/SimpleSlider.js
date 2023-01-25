// import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div style={{width:"250px",height:"250px"}}>
            {/* <h3>1</h3>
             */}
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            {/* <h3>2</h3> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7trwnd0Z7kl_V2SSxu0X1aWetOHlSG_nNcLzEw9l&s"
              alt=""
            />
          </div>
          <div>
            {/* <h3>3</h3> */}
                        <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7trwnd0Z7kl_V2SSxu0X1aWetOHlSG_nNcLzEw9l&s"
              alt=""
            />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
