import React, {useEffect, useState} from 'react';
import mondaySdk from "monday-sdk-js";
import { Button } from "monday-ui-react-core";
import './App.css';
const monday= mondaySdk();

function App() {

  // const [countries, setCountries] = useState([])
  //
  // useEffect(() => {
  //     monday.api(`query {
  //       boards (ids: 4505502032) {
  //         items {
  //           id, name
  //         }
  //       }
  //     }`).then(({data}) => setCountries(data as any))
  // }, [])

  return (
    <div >
      <header>
          <Button>Hello</Button>
        {/*{(countries.length !==  0)&&<div style={{color:`white`}}>{JSON.stringify(countries)}</div>}*/}
        {/*{(countries.length === 0)&&<div style={{color:`white`}}>Loading...</div>}*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
