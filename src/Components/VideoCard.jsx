import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnail, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <>
      <div className="card w-auto md:w-[400px] aspect-video mx-auto ">
        {/* thumbnail */}
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} >
          <img
            src={snippet?.thumbnails?.high?.url || demoThumbnail} alt={snippet?.title}
            className='rounded-xl w-auto md:w-[400px] '
          />
        </Link>
        {/* title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle2" color="gray" sx={{
            width : "350px"
          }}>
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        {/* channelname */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </div>
    </>
  )
}

export default VideoCard
