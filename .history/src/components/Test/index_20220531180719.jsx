import './styles.css'
import { useEffect, useState } from 'react'

const Test = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        const repon =fetch('http:zcjkscasc')
        setData(repon)
    })
    return (
        <>
            <section>data[0]['name']</section>
            <header>dasdjnkasd</header>
        </>
    )
}
export default Test