import React, {useContext} from 'react';
import styled from 'styled-components';
import Expandable from './Expandable';
import {MusicContext} from './MusicContext';
import MusicPlayer from './MusicPlayer';
import TrackList from './TrackList';

const ExpandableWrapper = styled.div`
  border: 1px solid cyan;
  height: 30%;
  overflow-y: scroll;
`;

const HomePageContent = () => {
  const {musicState: {tracks}} = useContext(MusicContext);
  return (
      <React.Fragment>
        <MusicPlayer/>
        <ExpandableWrapper>
          {tracks.length > 0 && <Expandable
              defaultExpanded
              onClick={(expanded) => console.log('expanded? ' + expanded)}>
            <TrackList/>
          </Expandable>}
        </ExpandableWrapper>
      </React.Fragment>
  );
};

export default HomePageContent;

HomePageContent.propTypes = {};
