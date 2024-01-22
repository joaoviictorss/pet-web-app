import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PetDynamicPage = () => {
  const router = useRouter();
  const { PetDynamicPage, data } = router.query;


        const parseData = JSON.parse(decodeURIComponent(data || "{}"));


  console.log(parseData)

  // const url = parseData.img_url;
  const url =
    "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg";
  const name = parseData.name;
  const age = parseData.age;
  const condition = parseData.condition;
  const location = parseData.location;
  const aditionaInfo = parseData.aditional_info;
  const svgUrl =
    parseData.type.toLowerCase() === "cat"
      ? "/cat.svg"
      : parseData.type.toLowerCase() === "dog"
      ? "/dog.svg"
      : "/other.svg";
  const gender = parseData.gender;
  const signalGender = gender.toLowerCase() === "male" ? "♂" : "♀";

  return (
    <div>
      {parseData && (
        <div className="dynamic-page">
          <div className="card-pet-info">
            <div className="header-pet-info">
              <img src={svgUrl}></img>
              <h2>{signalGender}</h2>
              <p>{gender}</p>
              <img src={url} className="pet-img"></img>
              <h1>{name}</h1>
            </div>
            <div className="pet-infos"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDynamicPage;
