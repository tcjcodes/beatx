import React, {useContext} from 'react';
import Expandable from './Expandable';
import {MusicContext} from './MusicContext';
import MusicPlayer from './MusicPlayer';
import TrackList from './TrackList';

const SOUNDCLOUD_PLAYLIST_URL = 'https://soundcloud.com/polo-g/sets/polo-g?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';

const HomePageContent = () => {
  const {musicState: {tracks}} = useContext(MusicContext);
  return (
      <React.Fragment>
        <MusicPlayer
            url={SOUNDCLOUD_PLAYLIST_URL}/>
        {tracks.length > 0 && <Expandable
            defaultExpanded
            onClick={(expanded) => console.log('expanded? ' + expanded)}>
          <TrackList/>
        </Expandable>}
      </React.Fragment>
  );
};

export default HomePageContent;

HomePageContent.propTypes = {};
