import React, {useContext} from 'react';
import styled from 'styled-components';
import Expandable from './Expandable';
import MainSection from './MainSection';
import {MusicContext} from './MusicContext';
import MusicPlayer from './MusicPlayer';
import TrackList from './TrackList';

const MusicPlayerWrapper = styled(MainSection)`
  border: 1px solid green;
  padding-bottom: ${props => props.theme.spacing.lg};
`;
const ExpandableWrapper = styled(MainSection)`
  border: 1px solid cyan;
  height: 40%;
  overflow-y: scroll;
`;

const HomePageContent = () => {
  const {musicState: {tracks}} = useContext(MusicContext);
  return (
      <React.Fragment>
        {/*<Spacer/>*/}
        <MusicPlayerWrapper>
          <MusicPlayer/>
        </MusicPlayerWrapper>

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
