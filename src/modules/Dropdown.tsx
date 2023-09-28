import React, {useEffect, useState} from 'react';
import {
    Autocomplete,
    AutocompleteChangeDetails,
    AutocompleteChangeReason, AutocompleteInputChangeReason,
    AutocompleteValue,
    TextField
} from '@mui/material';
import './Dropdown.css'

function Dropdown(props: { value: string | null, options: string[], label: string}) {

    return (
        <div className='Dropdown'>
            <Autocomplete
                className='Autocomplete'
                value={props.value}
                options={props.options}
                renderInput={(params) => (
                    <TextField {...params}
                               className='TextField'
                               label={props.label}
                               variant='outlined'
                    />
                )
                }
            />
        </div>
    );
}

export default Dropdown;