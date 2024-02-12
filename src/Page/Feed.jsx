import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from '@mui/material'
import Videos from "../Components/Video";
import Sidebar from '../Components/Sidebar'
import { fetchFromAPI } from '../utils/FetchFromAPI'


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <>

            <Stack
                sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box
                    sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                    <Sidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}

                    />
                    <Typography
                        className="copyright" variant="body2"
                        sx={{ mt: 1.5, color: "#fff", }}>
                        Cloned By | Devendra 
                    </Typography>
                </Box>
                <div className="flex justify-center">
                    <Box className="right"
                        sx={{
                            overflowY: 'auto',
                            height: '90vh', flex: 2
                        }}>
                        <Typography
                            variant='h4'
                            fontWeight='bold'
                            m={2}
                        >
                            {selectedCategory}
                            <span className='ml-1'>Videos</span>
                        </Typography>
                        <div className="ml-8 md:ml-4" >
                        <Videos videos={videos} />
                        </div>
                    </Box>
                     </div >
            </Stack>
       
        </>
    )
}

export default Feed
