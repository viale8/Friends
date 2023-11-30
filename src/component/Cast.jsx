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
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-10 xl:grid-cols-6 px-2 pt-5 pb-5 sm:grid-cols-3">
          {castData.data.map((actor) => (
            <div key={actor.character.id} className="flex flex-col justify-center items-center pb-7 w-40 relative">
              <div className="relative group">
                <img
                  src={actor.character.image.medium}
                  alt={actor.person.name}
                  className="w-44 transition-all duration-150 group-hover:brightness-50"
                />
                <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 items-center justify-center">
                  <p className="text-white text-lg font-bold">{actor.character.name}</p>
                </div>
              </div>
              <p className="text-purple-dark font-bold pt-2">{actor.person.name}</p>
            </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CastComponent;
