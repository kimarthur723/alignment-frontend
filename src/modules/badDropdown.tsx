import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Autocomplete, TextField} from '@mui/material';
import './Dropdown.css'
import {css} from '@emotion/react'

function BadDropdown() {
    const LOCALHOST = 'http://localhost:8080/'

    const [makes, setMakes] = useState([]);
    const [makeSelection, setMakeSelection] = useState<string | null>(null);
    const [makeDisplay, setMakeDisplay] = useState('');

    const [models, setModels] = useState([]);
    const [modelSelection, setModelSelection] = useState<string | null>(null);
    const [modelDisplay, setModelDisplay] = useState('');

    const [years, setYears] = useState([]);
    const [yearSelection, setYearSelection] = useState<string | null>(null);
    const [yearDisplay, setYearDisplay] = useState('');

    const [car, setCar] = useState([]);


    useEffect(() => {
        axios.get(LOCALHOST + 'makes')
            .then(({data}) => {
                setMakes(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let URL = LOCALHOST + 'models/';
        if (makeSelection != null) {
            URL += makeSelection;
        }
        axios.get(URL)
            .then(({data}) => {
                setModels(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [makeSelection]);

    useEffect(() => {
        let URL = LOCALHOST + 'years/';
        console.log(URL);
        if (modelSelection != null) {
            URL += encodeURIComponent(modelSelection as string);
        }
        axios.get(URL)
            .then(({data}) => {
                setYears(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [modelSelection]);

    return (
        <div className='Dropdown'>
            <div>
                {`car: ${car}`}
            </div>
            <Autocomplete
                className='Autocomplete'
                options={makes}
                value={makeSelection}
                onChange={(_, newValue: string | null) => {
                    setMakeSelection(newValue);
                    setModelSelection(null);
                    setYearSelection(null);
                    setModels([]);
                    setYears([]);
                }}
                inputValue={makeDisplay}
                onInputChange={(_, newValue) => {
                    setMakeDisplay(newValue);
                    setModelDisplay('');
                    setYearDisplay('');
                }}
                renderInput={(params) => (
                    <TextField {...params}
                               className='TextField'
                               label='Make'
                               variant='outlined'
                    />
                )
                }
            />

            <Autocomplete
                className='Autocomplete'
                options={models}
                value={modelSelection}
                onChange={(_, newValue: string | null) => {
                    setModelSelection(newValue);
                    setYearSelection(null);
                    setYears([]);

                }}
                inputValue={modelDisplay}
                onInputChange={(_, newValue) => {
                    setModelDisplay(newValue);
                    setYearDisplay('');
                }}
                renderInput={(params) => (
                    <TextField {...params}
                               className='TextField'
                               label='Model'
                               variant='outlined'
                    />
                )
                }
            />

            <Autocomplete
                className='Autocomplete'
                options={years}
                value={yearSelection}
                onChange={(_, newValue: string | null) => {
                    setYearSelection(newValue)
                }}
                inputValue={yearDisplay}
                onInputChange={(_, newValue) => {
                    setYearDisplay(newValue);
                    console.log("pusy");
                }}
                renderInput={(params) => (
                    <TextField {...params}
                               className='TextField'
                               label='Year'
                               variant='outlined'
                    />
                )
                }
            />
        </div>
    );
}

export default BadDropdown;
