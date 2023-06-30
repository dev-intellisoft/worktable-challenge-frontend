import React, {useEffect, useState} from 'react';
import mondaySdk from 'monday-sdk-js';
import "monday-ui-react-core/tokens";
import {Combobox, DialogContentContainer} from "monday-ui-react-core";
import axios from 'axios'
const monday = mondaySdk()

const loadCountriesFromBoard = async (boardId:number) => {
    let countries = []
    try {
        // @ts-ignore
        const {data:{boards}} = await  monday.api(`query {
        boards (ids: ${boardId}) {
          items {
            id, name
            column_values {
                id
                title
                value
              }
          }
        }
      }`)

        if (boards[0].items.length)
            for (let i = 0; i < boards[0].items.length; i ++)
                countries.push({...boards[0].items[i], label:boards[0].items[i].name})

        return JSON.parse(JSON.stringify(countries));
    } catch (e) {
        console.log(e)
        return  []
    }
}

const fetchWeatherData = async (item:any) => {
    try {
        const city = item.column_values[2].value.replaceAll('"', '')
        console.log(city)
        const {data} = await axios.get(`http://localhost:8080/weather?q=${city}`)
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
      loadCountriesFromBoard(4505502032).then( (data) => setCountries(data));
  }, [])

    return (
    <div>
      <header>

          {(countries.length === 0)&&<div style={{color:`white`}}>Loading...</div>}
          {(countries.length !==  0)&&<DialogContentContainer>
              {/*@ts-ignore*/}
              <Combobox options={countries} onClick={async (elem) => await fetchWeatherData(elem)}/>
          </DialogContentContainer>}
      </header>
    </div>
  );
}

export default App;
