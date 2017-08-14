import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import YTSearch from 'youtube-api-search';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import _ from 'lodash';

import Header from './components/Header';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const YOUTUBE_API_KEY = 'AIzaSyD7zdikrSbEhzvSrVdWsnMeCxui1qh8Xog';

const styleSheet = createStyleSheet({
    root: {
        flexGrow: 1
    },
    gridContainer: {
        padding: 10
    },
    paper: {
        padding: 10
    },
    paperVideoDescription: {
        marginTop: 10,
        padding: 10
    },
    videoDetail: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '600px'
    }
});

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            videos: null,
            selectedVideo: null
        }
    }

    componentDidMount()
    {
        this.searchVideo('react js');
    }
    
    searchVideo(term)
    {
        YTSearch({key: YOUTUBE_API_KEY, term: term, maxResults: 10}, (videos) => {
            
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            
        });
    }

    render()
    {
        const { classes } = this.props;
        const searchVideo = _.debounce((term) => {
            this.searchVideo(term)
        }, 300);

        return (
            <div className={ classes.root }>
                <Header searchVideo={ searchVideo } />
                <Grid container spacing={16} className={ classes.gridContainer }>
                    <Grid item xs={8} className={ classes.videoDetail }>
                        <VideoDetail video={ this.state.selectedVideo } />  
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={ classes.paper }>
                           <VideoList 
                                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } 
                                videos={ this.state.videos } />  
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styleSheet)(App);