import { useEffect, useState } from "react";
import Card from "./Card";
import DropdownFilter from "./Dropdown";
import CheckboxFilter from "./CheckboxFilter";
import ButtonFilter from "./ButtonFilter";
import MenuButton from "./MenuButton";
import Filter from "./svgs/Filter";

const GridSection = ({ dbData }) => {
  const dataDbRes = dbData;
  const [selectedType, setSelectedType] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedLocalization, setSelectedLocalization] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);

  function toogleMenu() {
    setMenuOpen((open) => !open);
  }

  const getUniqueValues = (property) => {
    const uniqueValues = Object.values(dataDbRes.pets)
      .map((pet) => pet[property])
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
    return uniqueValues;
  };

  const getAgeGroup = (age) => {
    return age <= 1
      ? "0-1 ano"
      : age > 1 && age <= 3
      ? "1-3 anos"
      : "mais de 3 anos";
  };

  const getTypeGroup = (type) => {
    if (type === "Cachorro") return "Dog";
    if (type === "Gato") return "Cat";
    return "Other";
  };

  const uniqueType = getUniqueValues("type");
  const uniqueBreed = getUniqueValues("breed");
  const uniqueLocation = getUniqueValues("location");

  const uniqueAge = [];
  for (const petId in dataDbRes.pets) {
    const pet = dataDbRes.pets[petId];
    const age = getAgeGroup(pet.age);
    if (!uniqueAge.includes(age)) {
      uniqueAge.push(age);
    }
    uniqueAge.sort();
  }

  const filteredPets = Object.values(dataDbRes.pets).filter((pet) => {
    if (
      selectedType.length > 0 &&
      !selectedType.includes(getTypeGroup(pet.type))
    )
      return false;
    if (selectedAge.length > 0 && !selectedAge.includes(getAgeGroup(pet.age)))
      return false;
    if (selectedBreed && pet.breed !== selectedBreed) return false;
    if (selectedLocalization && pet.location !== selectedLocalization)
      return false;
    return true;
  });

  const addItem = (item, filterType) => {
    switch (filterType) {
      case "Age":
        setSelectedAge((prevSelectedAge) => [...prevSelectedAge, item]);
        break;
      case "Type":
        setSelectedType((prevSelectedType) => [...prevSelectedType, item]);
        break;
      default:
        break;
    }
  };

  const removeItem = (itemToRemove, filterType) => {
    switch (filterType) {
      case "Age":
        setSelectedAge((prevSelectedAge) =>
          prevSelectedAge.filter((item) => item !== itemToRemove)
        );
        break;
      case "Type":
        setSelectedType((prevSelectedType) =>
          prevSelectedType.filter((item) => item !== itemToRemove)
        );
        break;
      default:
        break;
    }
  };

  const handleFilterChange = (selectedOption, filterType) => {
    switch (filterType) {
      case "Type":
        {
          for (const animal in selectedOption) {
            if (selectedOption[animal]) {
              addItem(animal, filterType);
            } else {
              removeItem(animal, filterType);
            }
          }
        }
        break;
      case "Age":
        {
          for (const index in selectedOption) {
            if (selectedOption[index]) {
              addItem(uniqueAge[index], filterType);
            } else {
              removeItem(uniqueAge[index], filterType);
            }
          }
        }
        break;
      case "Breed":
        {
          setSelectedBreed(uniqueBreed[selectedOption]);
        }
        break;
      case "Location":
        {
          setSelectedLocalization(uniqueLocation[selectedOption]);
        }
        break;
    }
  };

  const petIds = Object.keys(dataDbRes.pets);

  return (
    <div className="grid-section">
      <div
        className={`filter-section-out ${
          !menuOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <div className="filter-section">
          <MenuButton toogleMenu={toogleMenu} className="button-open-menu" />
          <div className="filter-bar">
            <div className="filter-svg">
              <span>
                <Filter />
                <h1>Filtros</h1>
              </span>
            </div>
            <div className="filters">
              <div>
                <ButtonFilter
                  title={"Pet"}
                  options={uniqueType}
                  onChange={(selectedOption) =>
                    handleFilterChange(selectedOption, "Type")
                  }
                />
              </div>
              <div>
                <CheckboxFilter
                  title={"Idade"}
                  options={uniqueAge}
                  onChange={(selectedOption) =>
                    handleFilterChange(selectedOption, "Age")
                  }
                />
              </div>
              <div>
                <DropdownFilter
                  title={"Raça"}
                  options={uniqueBreed}
                  onChange={(selectedOption) =>
                    handleFilterChange(selectedOption, "Breed")
                  }
                />
              </div>
              <div>
                <DropdownFilter
                  title={"Localização"}
                  options={uniqueLocation}
                  onChange={(selectedOption) =>
                    handleFilterChange(selectedOption, "Location")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className="cards-section">
          {filteredPets.map((pet, index) => (
            <Card key={index} petData={pet} petIds={petIds[index]} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GridSection;
