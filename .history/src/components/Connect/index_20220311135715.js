import React, { useState } from 'react';
import Add from '../Add';

const Connect = () => {
    const [ value, setValue ] = useState(0)
    const [ bad, setBad ] = useState(2)
    const handleCall = () => {
        setValue(value + 1);
    };
    const setndds = (e) => {
        setBad(e);
    }
    return(
        <>
            <button onClick={handleCall}>
                Connect Wallet
            </button>
            <Add  valueInput={value} haambalam={setndds}/>
            <div>
                {bad}
            </div>
        </>
    )
}
export default Connect