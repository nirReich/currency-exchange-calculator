import React from 'react'

export default function ExList(props) {
    return (
        <div>
            <h3>#{props.index + 1}</h3>
            <h3>from {props.exList.from} to {props.exList.to}</h3>
            <h3>{props.exList.amount} = {props.exList.result}</h3>
            <button onClick={() => { props.removeExList(props.index) }}>X</button>
        </div>
    )
}
