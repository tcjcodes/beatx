import React, {useContext} from 'react';
import Expandable from './Expandable';
import {MusicContext} from './MusicContext';
import MusicPlayer from './MusicPlayer';
import TrackList from './TrackList';

const HomePageContent = () => {
  const {musicState: {tracks}} = useContext(MusicContext);
  return (
      <React.Fragment>
        <MusicPlayer/>
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
