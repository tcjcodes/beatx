import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const MusicContext = createContext({});

export const MusicContextProvider = ({children}) => {
  const [state, setState] = useState({
    tracks: [],
    currentTrack: null,
    currentTrackIndex: -1,
  });

  const setTracks = (tracks) => {
    setState(prevState => ({...prevState, tracks}));
  };
  const setCurrentTrackIndex = (currentTrackIndex) => {
    setState(prevState => ({
      ...prevState,
      currentTrackIndex,
      currentTrack: prevState.tracks[currentTrackIndex],
    }));
  };

  return (
      <MusicContext.Provider value={{
        musicState: state,
        setCurrentTrackIndex,
        setTracks,
      }}>
        {children}
      </MusicContext.Provider>
  );
};

MusicContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
