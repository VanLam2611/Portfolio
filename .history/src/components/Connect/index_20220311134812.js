import React, { useState } from 'react';
import Add from '../Add';

const Connect = () => {
    const [ value, setValue ] = useState(0)
    const handleCall = ()=>{
        setValue(value + 1);
    };
    return(
        <>
            <div onClick={()=>handleCall}>
                Connect Wallet
            </div>
            <Add  valueInput={value}/>
        </>
    )
}
export default Connect