import React from 'react';
import Expandable from './Expandable';
import MusicPlayer from './MusicPlayer';
import TrackList from './TrackList';

const HomePageContent = () => (
    <React.Fragment>
      <MusicPlayer
          url="https://soundcloud.com/polo-g/sets/polo-g?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"/>
      <Expandable
          onClick={(expanded) => console.log('expanded? ' + expanded)}>
        <TrackList/>
      </Expandable>
    </React.Fragment>
);

export default HomePageContent;

HomePageContent.propTypes = {};
