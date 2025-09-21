import React, { forwardRef } from 'react'

const Video = forwardRef((props, ref, ) => {
    return (
        <div className='h-full w-full'>
            <video
                ref={ref}
                className='h-full w-full object-cover'
                playsInline
                loop
                muted
                src="/Assets/Hero.mp4"

            />
        </div>
    )
})

export default Video
