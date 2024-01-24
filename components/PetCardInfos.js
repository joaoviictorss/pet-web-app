import React from "react";

import List from "@/components/svgs/List";
import Location from "@/components/svgs/Location";
import Infos from "@/components/svgs/Infos";

const PetCardInfos = ({ petData }) => {

    console.log(petData)
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
            <div className="container-info">
              <span>
                <List />
                Condição:
                <p className="">{condition}</p>
              </span>
            </div>
            <div className="container-info">
              <h2>
                <Location />
                Localização:
              </h2>
              <p className="">{location}</p>
            </div>
            <div className="container-info">
              <h2>
                <Infos />
                Informações adicional
              </h2>
              <p className="">{aditionaInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetCardInfos;
