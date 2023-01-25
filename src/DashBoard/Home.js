import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [getImages, setImages] = useState([
    {
      id: "Headphone",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: "Bottle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7trwnd0Z7kl_V2SSxu0X1aWetOHlSG_nNcLzEw9l&s",
    },
  ]);
  const [data, setData] = useState({});
  // const [isLoading, setLoading] = useState(true);
  const [getExplore, setExplore] = useState({});

  useEffect(() => {
    axios
      .post("https://admin-stage.myfitindia.com/api/v1/position/home")
      .then(value => {
        // console.log(value.data.data.block_2.content[0].name);
        setData(value.data.data);
        setExplore(value.data.data);

        value.data.data.block_1.content.forEach(content => {
          setImages([
            ...getImages,
            { id: "Dress", image: content.image.desktop.url },
          ]);
        });
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);
  // console.log("sheeru", getExplore);

  return (
    <div>
      {/* {!isLoading && ( */}
      <div>
        {/* <div style={{ padding: "30px" }}>
          <input
            style={{ height: "30px", width: "450px", padding: "0 0 0 15px" }}
            type="text"
            placeholder="search"
          />
        </div> */}
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            &#128270;
          </button>
        </div>
        {/* ------------caurosel container---------- */}
        <Carousel autoPlay={true} width={"500px"}>
          {getImages.map((item, index) => {
            return (
              <div key={index.toString()}>
                <img
                  src={item.image}
                  alt=""
                />
                <p className="legend">
                  {item.id} {index + 1}
                </p>
              </div>
            );
          })}
        </Carousel>
        {/* ------------Trending sales container---------- */}
        <div>
          <p>{data?.block_2?.title}</p>
        </div>
        <div className="cards">
          {data?.block_2?.content?.map((item, index) => {
            return (
              <div className="shopping_card" key={index.toString()}>
                <img src={item?.image?.original} alt="" style={{width:"200px",height:"200px"}} />
                <p>{item?.name}</p>
                <p>{item?.slug}</p>
                <p>
                  {item?.unit_price}
                  <strike>{item?.purchase_price}</strike>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* )} */}
      {/* ------------Explore sales container---------- */}
      <div>
        <p>{data?.block_3?.title}</p>
      </div>
      <div className="explore">
        {data?.block_3?.content?.map((item, index) => {
          return (
            <div className="" key={index.toString()}>
              <img src={item?.image} alt="" />
              <p>{item?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
