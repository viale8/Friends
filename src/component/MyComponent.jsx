import React, { useState, useEffect } from "react";
import useFetch from "../customHook/useFetch";

const MyComponent = () => {
  const showId = 431; // ID de la série "Friends"

  const [seasonsUrl, setSeasonsUrl] = useState(`https://api.tvmaze.com/shows/${showId}/seasons`);
  const [episodesUrl, setEpisodesUrl] = useState(null);
  const [castUrl, setCastUrl] = useState(`https://api.tvmaze.com/shows/${showId}/cast`);

  const seasonsData = useFetch(seasonsUrl);
  const episodesData = useFetch(episodesUrl);
  const castData = useFetch(castUrl);

  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    // Effectue la requête pour obtenir les saisons une fois que le composant est monté
    setSeasonsUrl(`https://api.tvmaze.com/shows/${showId}/seasons`);
    
    // Effectue la requête pour obtenir les données du casting une fois que le composant est monté
    setCastUrl(`https://api.tvmaze.com/shows/${showId}/cast`);
  }, [showId]);

  const handleSeasonClick = (season) => {
    // Vérifie si la saison cliquée est la même que celle déjà sélectionnée
    if (season === selectedSeason) {
      // Réinitialise l'état de la saison et de l'épisode sélectionnés
      setSelectedSeason(null);
      setSelectedEpisode(null);
    } else {
      // Met à jour l'état de la saison sélectionnée
      setSelectedSeason(season);
      // Réinitialise l'état de l'épisode sélectionné
      setSelectedEpisode(null);

      // Effectue la requête pour obtenir les épisodes de la saison sélectionnée
      setEpisodesUrl(`https://api.tvmaze.com/seasons/${season.id}/episodes`);
    }
  };

  const handleEpisodeClick = (episode) => {
    // Met à jour l'état de l'épisode sélectionné
    setSelectedEpisode(episode);
  };

  return (
    <div className="flex flex-col">
      {seasonsData.data && !seasonsData.isLoading && !seasonsData.isError && (
        <div className="grid gap-5 grid-cols-2 grid-rows-2 px-12 pt-5 pb-5 justify-center items-center sm:grid-cols-5">
          {seasonsData.data.map((season) => (
            <div key={season.id} onClick={() => handleSeasonClick(season)}className="flex flex-col items-center gap-2 cursor-pointer">
              <img src={season.image.medium} alt={`Saison ${season.number}`} 
               className="bg-black aspect-square object-contain hover:scale-105 duration-150 w-60"/>
              <p className="text-white font-bold uppercase text-sm pb-4">
                Season {season.number}
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedSeason && (
        <div className="flex flex-col justify-start ml-12">
          <h2 className="pt-2 pb-5 text-white text-3xl items-start font-gabriel_weiss_friends">Season {selectedSeason.number} <span className="text-base font-sans sm:text-lg">({selectedSeason.premiereDate} to {selectedSeason.endDate})</span></h2>
          {episodesData.data && !episodesData.isLoading && !episodesData.isError ? (
            <ul className="flex gap-5 justify-start">
              <div>
              {episodesData.data.map((episode) => (
                <div>
                   {selectedEpisode && selectedEpisode.id === episode.id && (
                    <>
                   <img src={episode.image.original} className="w-" />
                   {selectedEpisode && selectedEpisode.id === episode.id && (
                    <div className="pt-2 text-sm text-white font-regular">
                      <div dangerouslySetInnerHTML={{ __html: selectedEpisode.summary }} />
                    </div>
                  )}
                  </>
                  )}
                </div>
              ))}
             
              </div>
              <div>
              {episodesData.data.map((episode) => (
                <li key={episode.id} className="pb-2 text-grey font-medium">
                  <button onClick={() => handleEpisodeClick(episode)}
                  className={`hover:text-white duration-150 text-start text-medium ${selectedEpisode && selectedEpisode.id === episode.id ? 'text-white font-bold' : 'text-grey'}`}>
                    Episode {episode.number} - {episode.name}
                  </button>
                </li>
              ))}
              </div>
            </ul>
          ) : (
            <p>Chargement en cours des épisodes...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
