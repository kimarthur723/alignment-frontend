import React, {useEffect, useState} from 'react';
import './App.css';
import Dropdown from "./modules/Dropdown";
import DataTable from "./modules/DataTable"
import axios from "axios";

const LOCALHOST = 'http://localhost:8080/'

function App() {
    const [make, setMake] = useState<string | null>(null);
    const [makeOpts, setMakeOpts] = useState<string[]>([]);
    const [model, setModel] = useState<string | null>(null);
    const [modelOpts, setModelOpts] = useState<string[]>([]);
    const [year, setYear] = useState<string | null>(null);
    const [yearOpts, setYearOpts] = useState<string[]>([]);
    const [alignmentData, setAlignmentData] = useState<string[]>([]);


    const handleMakeChange = (event: React.SyntheticEvent, value: string | null) => {
        setMake(value);
        setModel(null);
        setModelOpts([]);
        setYear(null);
        setYearOpts([]);
    };
    const handleModelChange = (event: React.SyntheticEvent, value: string | null) => {
        setModel(value);
        setYear(null);
        setYearOpts([]);
    };
    const handleYearChange = (event: React.SyntheticEvent, value: string | null) => {
        setYear(value);
    };

    useEffect(() => {
        axios.get(LOCALHOST + 'makes')
            .then(({data}) => {
                setMakeOpts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let URL = LOCALHOST + 'models/';
        if (make != null) {
            URL += make;

            axios.get(URL)
                .then(({data}) => {
                    setModelOpts(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [make]);

    useEffect(() => {
        let URL = LOCALHOST + 'years/';
        if (model != null) {
            URL += encodeURIComponent(model);

            axios.get(URL)
                .then(({data}) => {
                    setYearOpts(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [model]);

    useEffect(() => {
        let URL = LOCALHOST + 'cars/';
        if (make != null && model != null && year != null) {
            URL += encodeURIComponent(make) + '/' + encodeURIComponent(model) + '/' + encodeURIComponent(year);

            axios.get(URL)
                .then(({data}) => {
                    setAlignmentData(data);
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setAlignmentData([]);
        }
    }, [make, model, year]);

    return (
        <div className="App">
            <header className="App-header">

            </header>

            <Dropdown value={make} options={makeOpts} label={"Make"} onChange={handleMakeChange}/>
            <Dropdown value={model} options={modelOpts} label={"Model"} onChange={handleModelChange}/>
            <Dropdown value={year} options={yearOpts} label={"Year"} onChange={handleYearChange}/>
            <DataTable data={alignmentData}/>
        </div>
    );
}

export default App;
