import React from 'react';
import ReactPlayer from 'react-player';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styleSheet = createStyleSheet({
    paper: {
        padding: 20,
        marginTop: 20
    },
    videoDetail: {
        width: '100%'
    }
});

const VideoDetail = (props) => {
    
    const { classes, video } = props;
    
    if (!video)
        return <CircularProgress />;
    
    return (
        <div className={ classes.videoDetail } >
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                playing={ false }
                controls={ true }
                height={ 600 }
                width="100%" />
            <Paper className={ classes.paper } >
                <Typography type="headline" component="h3">
                    { video.snippet.title }
                </Typography>
                <Typography type="body1" component="p">
                    { video.snippet.description }
                </Typography>
            </Paper> 
        </div>
    );
}

export default withStyles(styleSheet)(VideoDetail);