import React from 'react';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {

    if (props.videos === null)
        return <CircularProgress />;

    if (props.videos.length === 0)
        return <p>No results found</p>;

    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem onVideoSelect={ props.onVideoSelect } key={ video.id.videoId } video={ video } />
        );
    });

    return (
        <List>
            { videoItems }
        </List>
    );
}

export default VideoList;