import React from "react";

import Link from "next/link";
//svgs
import List from "@/components/svgs/List";
import Location from "@/components/svgs/Location";
import Infos from "@/components/svgs/Infos";
import Bird from "../../../components/svgs/Bird";
import BackButton from "../../../components/svgs/BackButton";

export default async function Pet({ params }) {
  let id = params.id;

  const response = await fetch("http://localhost:3000/api/getData");
  const data = await response.json();
  const petData = Object(data.pets[id]);

  const url = petData.img_url;
  const name = petData.name;
  const age = petData.age;
  const condition = petData.condition;
  const contact = petData.contact;
  const aditionaInfo = petData.aditional_info;
  const svgUrl =
    petData.type.toLowerCase() === "gato"
      ? "/cat.svg"
      : petData.type.toLowerCase() === "cachorro"
      ? "/dog.svg"
      : "/other.svg";
  const gender = petData.gender;
  const signalGender = gender.toLowerCase() === "macho" ? "♂" : "♀";

  return (
    <>
      <div className="dynamic-page">
        <div className="back-button">
          <Link href={"/"}>
            <BackButton />
          </Link>
        </div>
        <div className="card-pet-info">
          <div className="header-pet-info">
            <div className="gender-type">
              <div className="icon">
                <img src={svgUrl}></img>
              </div>
              <h2 className="signal-gender">{signalGender}</h2>
              <p className="gender">{gender}</p>
            </div>
            <div className="centralize-img">
              <img src={url} className="pet-img"></img>
            </div>
            <div className="name-pet">
              <h1>{name}</h1>
            </div>
          </div>

          <div className="pet-infos">
            <div>
              <div className="container-info">
                <span>
                  <List />
                  <h2>Condição:</h2>
                </span>
                <p>{condition}</p>
              </div>
              <div className="container-info">
                <span>
                  <Location />
                  <h2>Localização:</h2>
                </span>
                <p>{contact}</p>
              </div>
              <div className="container-info">
                <span>
                  <Infos />
                  <h2>Informações adicional</h2>
                </span>
                <p>{aditionaInfo}</p>
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
}
