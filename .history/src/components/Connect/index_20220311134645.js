import React, { useState, useCallback } from 'react';
import Add from '../Add';

const Connect = () => {
    const [ value, setValue ] = useState(0)
    const handleCall = ()=>{
        alert('this '+ valueInput)
        setValue(value + 1)
    }
    return(
        <>
            <button onClick={handleCall}>
                Connect Wallet
            </button>
            <div>
                Address: {value ? value : "null on!"}
            </div>
            <Add  valueInput={value}/>
        </>
    )
}
export default Connect