import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PetCardInfos from "@/components/PetCardInfos";

const PetDynamicPage = () => {
  const router = useRouter();
  const id = router.query.PetDynamicPage;

  const [dataRes, setDataRes] = useState(null);
  useEffect(() => {
    fetch(`/api/getData`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        return response.json();
      })
      .then((data) => {
        setDataRes(Object(data.pets[id]));
      })
      .catch((error) => {
        console.error("An error occourred: ", error);
      });
  }, []);
  return <>{dataRes && <PetCardInfos petData={dataRes} />}</>;
};

export default PetDynamicPage;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {},
  };
};
