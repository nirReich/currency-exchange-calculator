import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';



export default function Exchange(props) {

    const [fromCoin, setFromCoin] = useState('');
    const [toCoin, setToCoin] = useState('');
    const [amount, setAmount] = useState('');


    const coinListSelect = () => {// dropdown list of coins
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
            <h1 className="headTitle">Exchange App</h1>
            <br/>
            <p className="headTitle">from:</p>
            <select name="fromCoin" id="fromCoin" onChange={(e) => { setFromCoin(e.target.value) }}>
                <option value="">Select Currency</option>
                {coinListSelect()}
            </select>
            <input type="number" id="startExBtn" onChange={(e) => { setAmount(e.target.value) }} />
            <br />
            <p className="headTitle">to:</p>
            <select name="toCoin" id="toCoin" onChange={(e) => { setToCoin(e.target.value) }}>
                <option value="">Select Currency</option>
                {coinListSelect()}
            </select>
            <br />
            <br />
            <Button variant="success" disabled={(fromCoin === '' || toCoin === '') ? true : false} onClick={() => { makeExchange(fromCoin, toCoin, amount) }} ><h3>=</h3></Button>
            <br />
            <br />

            <Link to={'/update'}><Button variant="warning">Update</Button>{' '}</Link>
            <a href="http://www.facebook.com"><Button variant="primary">Share on FaceBook</Button>{' '}</a>
            <Button variant="warning" onClick={() => { props.setTheFlag() }}>View Your Exchange List</Button>{' '}
        </div>
    )
}
