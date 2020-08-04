import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';



export default function Exchange(props) {

    const [fromCoin, setFromCoin] = useState('');
    const [toCoin, setToCoin] = useState('');
    const [amount, setAmount] = useState('');


    const coinListSelect = () => {
        return props.coinList.map((e,index) => { return <option key={index} value={e.name}>{e.name}</option> })
    }

    let makeExchange = (from, to, num) => {
        let coinVal = (coin) => {
            for (let index = 0; index < props.coinList.length; index++) {
                if (props.coinList[index].name === coin) {
                    return props.coinList[index].val
                }
            }
        }
        let fromCoinVal = coinVal(from)
        let toCoinVal = coinVal(to)
        let result = fromCoinVal / toCoinVal * num

        props.pushExList({ from: from, to: to, amount: num, result: result });
        alert(result);
    }



    return (
        <div>
            <h1>Exchange</h1>
            <p>from:</p>
            <select name="fromCoin" id="fromCoin" onChange={(e) => { setFromCoin(e.target.value) }}>
                <option value="">Select Currency</option>
                {coinListSelect()}
            </select>
            <input type="number" id="startExBtn" onChange={(e) => { setAmount(e.target.value) }} />
            <br />
            <p>to:</p>
            <select name="toCoin" id="toCoin" onChange={(e) => { setToCoin(e.target.value) }}>
                <option value="">Select Currency</option>
                {coinListSelect()}
            </select>
            <br />
            <br />
            <button disabled={(fromCoin === '' || toCoin === '') ? true : false} onClick={() => { makeExchange(fromCoin, toCoin, amount) }} >Start</button>
            <Button variant="success">Success</Button>
            <br />
            <br />

            <Link to={'/update'}> <button>Update</button> </Link>
            <a href="http://www.facebook.com"><button>Share on FaceBook</button></a>
            <button onClick={() => { props.setTheFlag() }}>View Your Exchange List</button>
        </div>
    )
}
