import React, { useState, useEffect } from "react";
import useFetch from "../customHook/useFetch";

const CastComponent = () => {
  const showId = 431; // ID de la série "Friends"

  const [castUrl, setCastUrl] = useState(`https://api.tvmaze.com/shows/${showId}/cast`);
  const castData = useFetch(castUrl);

  useEffect(() => {
    // Effectue la requête pour obtenir les données du casting une fois que le composant est monté
    setCastUrl(`https://api.tvmaze.com/shows/${showId}/cast`);
  }, [showId]);

  return (
    <div className="">
      {castData.data && !castData.isLoading && !castData.isError && (
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 px-20 pt-5 pb-5">
          {castData.data.map((actor) => (
            <div className="flex justify-center items-center">
              <div key={actor.character.id} className="flex flex-col justify-center items-center pb-7 w-40">
                <img src={actor.character.image.medium} alt={actor.person.name} className="pb-1 w-44"/>
                <p className="text-purple-dark font-bold" >{actor.person.name}</p>
                <p className="text-purple-dark text-sm font-medium" >as {actor.character.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CastComponent;
