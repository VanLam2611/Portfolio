import React, { useState, useCallback } from 'react';
import Add from '../Add';

const Connect = () => {
    const [ value, setValue ] = useState('')
    const handleCall = useCallback((valueInput)=>{
        alert('this '+ valueInput)
        setValue(valueInput)
    })
    return(
        <>
            <button>
                Connect Wallet
            </button>
            <div>
                Address: {value ? value : "null on!"}
            </div>
            <Add  valueInput={handleCall}/>
        </>
    )
}
export default Connect