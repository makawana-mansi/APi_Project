import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ImageData = () => {
    const a = useParams ()
    console.log(a);

    return (
        <div>
            <h1 className='text-2xl text-white bg-green-950'>Hello how are you </h1>
        </div>
    )
}

export default ImageData