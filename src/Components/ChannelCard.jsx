import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'

const ChannelCard = ({ channelDetail }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: '356px', md: "320px" },
                height: "326px",
                margin: "auto"
            }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                        color: "#ffff"
                    }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: "50%",
                            height: "180px",
                            width: "180px",
                            mb: 2,
                            border: "1px solid #ffff"
                        }}
                    />
                    <Typography variant='h6' >
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                    </Typography>
                    {channelDetail?.statistic?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistic?.subscriberCount).toLocaleString()}
                            Subscribers
                        </Typography>
                    )}

                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard