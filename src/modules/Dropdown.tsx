import React from 'react';

import {
    Autocomplete,
    TextField
} from '@mui/material';
import './Dropdown.css'

function Dropdown(props: {
    value: string | null,
    options: string[], label: string,
    onChange: ((event: React.SyntheticEvent<Element, Event>, value: string | null) => void)
}) {

    return (
        <div className='Dropdown'>
            <Autocomplete
                value={props.value}
                className='Autocomplete'
                options={props.options}
                onChange={props.onChange}
                renderInput={(params) => (
                    <TextField {...params}
                               name='TextField'
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