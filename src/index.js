import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyD6b9nFenwvyOGkl5Mjx8wyLhfZi8JNBTU';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.onSearch('BMW');
  }
  onSearch(searchTerm){
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    const videoSearch = _.debounce((searchTerm => this.onSearch(searchTerm)), 500)
    return(
      <div>
        <SearchBar searchTerm={videoSearch} />
        <VideoDetail videoItem={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videoList={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
