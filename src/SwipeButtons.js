import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CancelIcon from '@material-ui/icons/Cancel';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import "./SwipeButtons.css";


const SwipeButtons = () => {
    return (
        <div className= "SwipeButtons">
        
           <IconButton className= "SwipeButtons_repeat">
                <ReplayIcon fontSize='large' />
           </IconButton>
           <IconButton className= "SwipeButtons_left">
                <CancelIcon fontSize='large' />
           </IconButton>
            <IconButton className= "SwipeButtons_star">
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className= "SwipeButtons_right">
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className= "SwipeButtons_lighting">
                <FlashOnIcon fontSize='large' />
            </IconButton>

        </div>
    );

};

export default SwipeButtons

