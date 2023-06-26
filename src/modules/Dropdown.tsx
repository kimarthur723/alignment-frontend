import React, {useEffect, useState} from 'react';

function Dropdown() {
    const [makes, setMakes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/makes')
            .then((resp) => resp.json())
            .then(json => {
                setMakes(json);
            });
        console.log(makes);
    }, [makes]);

    return (
        <div className="Dropdown">

        </div>
    );
}

export default Dropdown;
