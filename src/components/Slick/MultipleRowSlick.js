import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import styleSlick from "./Multiple.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block",color:'black',}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block",color:'black',}}
            onClick={onClick}
        />
    );
}

export default class MultipleRowsSlick extends Component {

  renderFilm = () => {
    return this.props.arrPhim.map((item, index) => {
      return <div key={index} className="width-item">
          <Film /> 
      </div>
    })
  }

  render() {
    const settings = {
      className: "center slider variable-width",
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div >
        <h2>Multiple Rows</h2>
        <Slider {...settings}>
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}

        </Slider>
      </div>
    );
  }
}