import { Carousel } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import './Slider.scss'
export const Slider = () => {
  const contentStyle = {
    height: "250px",
    color: "#fff",
    lineHeight: "250px",
    textAlign: "center",
    background: "#1890ff",
  };
  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightCircleOutlined />,
    prevArrow: <LeftCircleOutlined />,
  };
  return (
    <Carousel {...settings}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
