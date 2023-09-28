import React, {useEffect, useState} from 'react';
import './App.css';
import BadDropdown from './modules/badDropdown';
import Dropdown from "./modules/Dropdown";
import axios from "axios";

const LOCALHOST = 'http://localhost:8080/'


function App() {
    const [make, setMake] = useState<string | null>(null);
    const [makeOpts, setMakeOpts] = useState<string[]>([]);
    const [model, setModel] = useState<string | null>(null);
    const [modelOpts, setModelOpts] = useState<string[]>([]);
    const [year, setYear] = useState<string | null>(null);
    const [yearOpts, setYearOpts] = useState<string[]>([]);

    const handleMakeChange = (value: string | null) => {
        setMake(value);
    }
    const handleModelChange = (value: string | null) => {
        setModel(value);
    }
    const handleYearChange = (value: string | null) => {
        setYear(value);
    }


    useEffect(() => {
        axios.get(LOCALHOST + 'makes')
            .then(({data}) => {
                setMakeOpts(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let URL = LOCALHOST + 'models/';
        if (make != null) {
            URL += make;
        }
        axios.get(URL)
            .then(({data}) => {
                setModelOpts(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [make]);

    useEffect(() => {
        let URL = LOCALHOST + 'years/';
        console.log(URL);
        if (model != null) {
            URL += encodeURIComponent(model as string);
        }
        axios.get(URL)
            .then(({data}) => {
                setYearOpts(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [model]);

    return (
        <div className="App">
            <header className="App-header">

            </header>


            <Dropdown value={make} options={makeOpts} label={"Make"}/>
            <Dropdown value={model} options={modelOpts} label={"Model"}/>
            <Dropdown value={year} options={yearOpts} label={"Year"}/>


        </div>
    );
}

export default App;
