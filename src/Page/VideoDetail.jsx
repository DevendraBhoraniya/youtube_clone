import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "../Components/Video";
import Loader from "../Components/Loader";
import { fetchFromAPI } from "../utils/FetchFromAPI";


const VideoDetail = () => {

    const [VideoDetail, setVideoDetail] = useState
        (null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setVideoDetail(null);
        setVideos(null);

        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((videodata) => setVideoDetail(videodata.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))

    }, [id])

    if (!VideoDetail?.snippet) return <Loader />;

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = VideoDetail;

    return (
        <>
            <Box minHeight="95vh">
                <Stack direction={{ xs: "column", md: "row" }}>
                    <Box flex={1}>
                        <Box sx={{ width: "100%", top: "86px" }} className="aspect-video w-full p-2 h-auto sticky top-0 z-10" >
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="w-full aspect-video h-full mx-auto my-3 rounded-lg " controls />
                            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                                {title}
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                                <Link to={`/channel/${channelId}`}>
                                    <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                                        {channelTitle}
                                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                    </Typography>
                                </Link>
                                <Stack direction="row" gap="20px" alignItems="center" justifyContent="center">
                                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                        {parseInt(viewCount).toLocaleString()} views
                                    </Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                        {parseInt(likeCount).toLocaleString()} likes
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                        <Videos videos={videos} direction="column" 
                        sx={{
                            widthX :" auto"
                        }} />
                    </Box>
                </Stack>
            </Box>

        </>
    )
}

export default VideoDetail
