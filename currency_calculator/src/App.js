import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Exchange from './Componants/Exchange'
import Update from './Componants/Update'
import ExList from './Componants/ExList'



function App() {

  const [coinList, setCoinList] = useState([{ name: 'dollar', val: 3.43 }, { name: 'euro', val: 3.92 }, { name: 'shekel', val: 1 }]);
  const [exList, setExList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [nameFlag, setNameFlag] = useState(false);
  const [coinIndex, setCoinIndex] = useState('');

  const pushExList = (obj) => {
    setExList([...exList, obj])
  }

  const removeExList = (index) => {
    setExList(exList.filter((element, i) => (i !== index)));
  }

  const showExList = () => {
    if (flag === true) {
      return (
        exList.map((e, index) => { return <ExList exList={exList[index]} index={index} removeExList={removeExList} /> })
      )
    }
  }

  const setTheFlag = () => {
    setFlag(!flag)
  }

  const coinExsit = (name) => {
    for (let i = 0; i < coinList.length; i++) {
      if (coinList[i].name === name) {
        return i
        break
      }
    }
  }

  const updateCoinList = (name, val) => {
    let index=coinExsit(name)
    if (!isNaN(index)) {
      coinList[index].val=val
      setCoinList([...coinList])
    }
    else{
      setCoinList([...coinList, { name: name, val: val }])
    }
  }


  //-----------------------------------------------------------------------------------
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path={'/'} component={() => { return <Exchange coinList={coinList} pushExList={pushExList} setTheFlag={setTheFlag} /> }} />
          <Route exact path={'/update'} component={() => { return <Update coinList={coinList} updateCoinList={updateCoinList} /> }} />

          <br />

        </Switch>
      </Router>
      <br/>
      {showExList()}
    </div>
    

  );
}

export default App;
