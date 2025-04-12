import React, { useEffect, useState } from "react";

function VideoPlayer() {
    const [videoUrl, setVideoUrl] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/video").then(res=>res.blob()).then(data=>setVideoUrl(data))
    },[])
    return (
        <div>
            {/* <h1>Streaming Video</h1> */}
            {
                videoUrl ? (
                    <video controls width="600">
                        <source src="http://localhost:5000/video" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ):(
                    <p>Loading Video...</p>
                )
            }
            
        </div>
    );
}

export default VideoPlayer;
