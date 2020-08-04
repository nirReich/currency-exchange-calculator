import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Update(props) {

    const [newType, setNewType] = useState('');
    const [newVal, setNewVal] = useState('')


    const coinListTable = () => {
        return (
            props.coinList.map((e) => {
                return (
                    
                    <tr >
                        <td>{e.name}</td>
                        
                        <td>{e.val}</td>
                    </tr>
                )
            })
        )
    }

    const setTheNewVal = (e) => {
        if (isNaN(e)) {
            alert('not a number')
            document.getElementById("valInp").value='';
        }
        else {

            setNewVal(e)
        }

    }

    const setTheNewType = (e)=>{
        if ((e>='a' && e<='z') || (e>='A' && e<='Z')) {
            
            setNewType(e)
        }
        else {
            alert('Latters Only!')
            document.getElementById("typInp").value='';
        }
    }



//----------------------------------------------------
    return (
        <div className="App">
            <h1 className="headTitle">Update</h1>
            <table className="excListDiv">
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
                {coinListTable()}
            </table>

            <br />
            <h4 className="headTitle">Coin Type</h4>
            <br />
            <input id="typInp" type="text" placeholder="enter type" onChange={(e) => { setTheNewType(e.target.value) }} />
            <h4 className="headTitle">New Value</h4>
            <input id="valInp" type="text" placeholder="enter value" onChange={(e) => { setTheNewVal(e.target.value) }} />
            <br />
            <br />
            <Link to={'/'}> <button>Back</button></Link>
            <button onClick={() => { return props.updateCoinList(newType, newVal) }}>Update</button>
        </div>
    )
}
