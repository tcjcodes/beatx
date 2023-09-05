import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';
import songs from '../data/songs.json';

export const MusicContext = createContext({});

const SOUNDCLOUD_PLAYLIST_URL = 'https://soundcloud.com/polo-g/sets/polo-g?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

const mockState = {
  tracks: songs,
  currentTrack: songs[0],
  currentTrackIndex: 0,
  url: '',
};
export const MusicContextProvider = ({children}) => {
  const [state, setState] = useState({
    tracks: [],
    currentTrack: null,
    currentTrackIndex: -1,
    url: SOUNDCLOUD_PLAYLIST_URL,
  });

  const setTracks = (tracks) => {
    console.debug('setTracks', tracks);
    setState(prevState => ({...prevState, tracks}));
  };

  const setCurrentTrackIndex = (currentTrackIndex) => {
    console.debug('setCurrentTrackIndex', currentTrackIndex);
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
