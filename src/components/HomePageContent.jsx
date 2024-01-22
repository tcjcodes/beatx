import React, {useContext} from 'react';
import styled from 'styled-components';
import Expandable from './Expandable';
import MainSection from './MainSection';
import {MusicContext} from './MusicContext';
import MusicPlayer from './MusicPlayer';
import TrackList from './TrackList';

const MusicPlayerSection = styled(MainSection)`
  //border: 1px solid green;
  padding-bottom: ${props => props.theme.spacing.md};
`;
const ExpandableSection = styled(MainSection)`
  //border: 1px solid cyan;
  height: 40%;
  overflow-y: scroll;
`;

const HomePageContent = () => {
  const {musicState: {tracks}} = useContext(MusicContext);
  return (
      <React.Fragment>
        <MusicPlayerSection>
          <MusicPlayer/>
        </MusicPlayerSection>

        <ExpandableSection>
          {tracks.length > 0 && <Expandable
              defaultExpanded
              onClick={(expanded) => console.log('expanded? ' + expanded)}>
            <TrackList/>
          </Expandable>}
        </ExpandableSection>
      </React.Fragment>
  );
};

export default HomePageContent;

HomePageContent.propTypes = {};
