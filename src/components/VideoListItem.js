import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';

const VideoListItem = (props) => {

    const { video, onVideoSelect } = props;

    return (
        <ListItem divider button className="video-list-item" onClick={ () => onVideoSelect(video) } >
            <img src={ video.snippet.thumbnails.default.url } />
            <ListItemText primary={ video.snippet.title } />
        </ListItem>
    );
}

export default VideoListItem;