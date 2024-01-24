import React from "react";

//svgs
import List from "@/components/svgs/List";
import Location from "@/components/svgs/Location";
import Infos from "@/components/svgs/Infos";
import Bird from "./svgs/Bird";

const PetCardInfos = ({ petData }) => {
  // const url = petData.img_url;
  const url =
    "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg";
  const name = petData.name;
  const age = petData.age;
  const condition = petData.condition;
  const location = petData.location;
  const aditionaInfo = petData.aditional_info;
  const svgUrl =
    petData.type.toLowerCase() === "cat"
      ? "/cat.svg"
      : petData.type.toLowerCase() === "dog"
      ? "/dog.svg"
      : "/other.svg";
  const gender = petData.gender;
  const signalGender = gender.toLowerCase() === "male" ? "♂" : "♀";

  return (
    <>
      <div className="dynamic-page">
        <div className="card-pet-info">
          <div className="header-pet-info">
            <div className="icon">
              <img src={svgUrl}></img>
            </div>
            <h2 className="signal-gender">{signalGender}</h2>
            <p className="gender">{gender}</p>
            <div className="centralize-img">
              <img src={url} className="pet-img"></img>
            </div>
            <h1 className="name-pet">{name}</h1>
          </div>

          <div className="pet-infos">
            <div>
              <div className="container-info">
                <span>
                  <List />
                  <h2>Condição:</h2>
                </span>
                <p className="description">{condition}</p>
              </div>
              <div className="container-info">
                <span>
                  <Location />
                  <h2>Localização:</h2>
                </span>
                <p className="description">{location}</p>
              </div>
              <div className="container-info">
                <span>
                  <Infos />
                  <h2>Informações adicional</h2>
                </span>
                <p className="description">{aditionaInfo}</p>
              </div>
            </div>
            <div className="bird-svg">
              <Bird />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetCardInfos;
