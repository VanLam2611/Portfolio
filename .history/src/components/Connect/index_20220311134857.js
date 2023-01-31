import React, { useState } from 'react';
import Add from '../Add';

const Connect = () => {
    const [ value, setValue ] = useState(0)
    const handleCall = () => {
        setValue(value + 1);
    };
    return(
        <>
            <button onClick={handleCall}>
                Connect Wallet
            </button>
            <Add  valueInput={value}/>
        </>
    )
}
export default Connect