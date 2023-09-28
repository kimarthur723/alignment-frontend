import React from 'react'
import './DataTable.css'
import Table from '@mui/material/Table';
import {TableBody, TableCell, TableHead, TableRow} from "@mui/material";

function DataTable(props: { data: string[] }) {
    return (
        <div className='DataTable'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={10} align={"center"}>Front</TableCell>
                        <TableCell colSpan={6} align={"center"}>Rear</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"right"}>Rim</TableCell>
                        <TableCell align={"right"}>Caster</TableCell>
                        <TableCell align={"right"}>+</TableCell>
                        <TableCell align={"right"}>-</TableCell>
                        <TableCell align={"right"}>Camber</TableCell>
                        <TableCell align={"right"}>+</TableCell>
                        <TableCell align={"right"}>-</TableCell>
                        <TableCell align={"right"}>Toe</TableCell>
                        <TableCell align={"right"}>+</TableCell>
                        <TableCell align={"right"}>-</TableCell>
                        <TableCell align={"right"}>Camber</TableCell>
                        <TableCell align={"right"}>+</TableCell>
                        <TableCell align={"right"}>-</TableCell>
                        <TableCell align={"right"}>Toe</TableCell>
                        <TableCell align={"right"}>+</TableCell>
                        <TableCell align={"right"}>-</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell align={"right"}>{props.data[0]}</TableCell>
                        <TableCell align={"right"}>{props.data[1]}</TableCell>
                        <TableCell align={"right"}>{props.data[2]}</TableCell>
                        <TableCell align={"right"}>{props.data[3]}</TableCell>
                        <TableCell align={"right"}>{props.data[4]}</TableCell>
                        <TableCell align={"right"}>{props.data[5]}</TableCell>
                        <TableCell align={"right"}>{props.data[6]}</TableCell>
                        <TableCell align={"right"}>{props.data[7]}</TableCell>
                        <TableCell align={"right"}>{props.data[8]}</TableCell>
                        <TableCell align={"right"}>{props.data[9]}</TableCell>
                        <TableCell align={"right"}>{props.data[10]}</TableCell>
                        <TableCell align={"right"}>{props.data[11]}</TableCell>
                        <TableCell align={"right"}>{props.data[12]}</TableCell>
                        <TableCell align={"right"}>{props.data[13]}</TableCell>
                        <TableCell align={"right"}>{props.data[14]}</TableCell>
                        <TableCell align={"right"}>{props.data[15]}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    );
}

export default DataTable;