import React, { useState } from 'react';

const Add = (props) => {

    // const [it, setIt] = useState(0)
    const temp = (e) => {
        props.handleCall2(e.target.value)
    }
    return ( <
        >
        <
        input onChange = {
            (e) => temp(e)
        } >
        <
        /input> <
        div > { props.valueInput } <
        /div> < /
        >
    )
}
export default Add