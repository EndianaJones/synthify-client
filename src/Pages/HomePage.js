import React, { Component } from 'react';
import AppBar from '../components/AppBar';
import PlaylistDrawer from '../components/PlaylistDrawer';

class HomePage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      play: false,
      currentPlaylist: '',
      currentSong: 'Hello World'
    };

    this.mockPlaylistData = {
        'Playlist1':[
          'Silhoutte',
          'ADAMAS',
          'IGNITE',
        ],
        'Playlist2':[
          'MIC Drop',
          'DNA',
          'FAKE LOVE',
        ],
        'Playlist3':[
          'Rap God',
          'Love The Way You Lie',
          'Welcome to the Party',
        ],      
    };

    this.defaultSong = 'Hello World';
    this.defaultPlaylist = 'Playlist1'
  }

  toggleAudio = () => { this.setState({ play: !this.state.play }); };
  // NOTE: Function to change current playlist
  changePlaylist = (selectedPlaylist) => {
    this.setState({ currentPlaylist: selectedPlaylist });
  }
  
  // NOTE: Function to change current song
  selectSong = (selectedSong) => {
    this.setState({ currentSong: selectedSong });
  }

  render() {
    return (
      <div>
        <AppBar />
        <PlaylistDrawer
        toggleAudio={this.toggleAudio}
        audioState={this.state.play}
        changePlaylist={this.changePlaylist}
        currentSong={this.state.currentSong}
        currentPlaylist={this.state.currentPlaylist}
        mockPlaylistData={this.mockPlaylistData} />
      </div>
    );
  }
}

export default HomePage;