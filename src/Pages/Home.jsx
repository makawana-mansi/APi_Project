import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    const [data2, setData2] = useState([])

    const getData = async () => {
        const i = await axios.get('/data.json')
        setData2(i.data[0].technologies)
        console.log(i.data);
    }

    let dataI = 'no data'
    if (data2.length > 0) {
        dataI = data2.map(function (elem, index) {
            return <div key={index}>
                <img className='w-50 h-50 flex gap-5' onClick={getData} src={`https://codefellow.netlify.app/images/${elem.image}`} alt="img" />
            </div>
        })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>

            {/* <button className='bg-green-900 py-3 px-6 rounded active:scale-95' onClick={getData}>Get data</button> */}
            <div>
                {dataI}
            </div>
            <Link to={'/ImageData'}>Image Data</Link>
            <Outlet />
        </div>
    )
}

export default Home