
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import Sec1 from '../../../components/Sec1/Sec1'
import Cards from '../../../components/Cards/Cards'
import Sec2 from '../../../components/Sec2/Sec2'
import Sec3 from '../../../components/Sec3/Sec3'
import Cards2 from '../../../components/Cards/Cards2'
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Sec1/>
                <Sec2/>
                <Cards data={data} />
                <Sec3/>
                <Cards2 data={data}/>

        </>
        )
    }
    
    export default Home
        