import React from 'react'
import './Table.css'

function Table(props: {data: string[]}) {
    return (
        <div className='Table'>
            <table>
                <thead>
                <tr>
                    <th colSpan={10}>Front</th>
                    <th colSpan={6}>Rear</th>
                </tr>
                <tr>
                    <th>Rim</th>
                    <th>Caster</th>
                    <th>+</th>
                    <th>-</th>
                    <th>Camber</th>
                    <th>+</th>
                    <th>-</th>
                    <th>Toe</th>
                    <th>+</th>
                    <th>-</th>
                    <th>Camber</th>
                    <th>+</th>
                    <th>-</th>
                    <th>Toe</th>
                    <th>+</th>
                    <th>-</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{props.data[0]}</td>
                    <td>{props.data[1]}</td>
                    <td>{props.data[2]}</td>
                    <td>{props.data[3]}</td>
                    <td>{props.data[4]}</td>
                    <td>{props.data[5]}</td>
                    <td>{props.data[6]}</td>
                    <td>{props.data[7]}</td>
                    <td>{props.data[8]}</td>
                    <td>{props.data[9]}</td>
                    <td>{props.data[10]}</td>
                    <td>{props.data[11]}</td>
                    <td>{props.data[12]}</td>
                    <td>{props.data[13]}</td>
                    <td>{props.data[14]}</td>
                    <td>{props.data[15]}</td>
                </tr>
                </tbody>
            </table>
        </div>

    );
}

export default Table;