import React from 'react';
import '../Styles/Registrationc.css'
import AdminNavbar from '../components/AdminNavbar';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';


function Admin() {
    const [market, setMarket] = React.useState('open');
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, settoDate] = React.useState('');
    const executeOrder = () => {
        const data = {
            "market": market,
            "fromdate": fromDate,
            "todate": toDate,
        }
        axios.post('http://localhost:3001/getcategory', { data }).then(
            function (res) {
                console.log(res);
            }
        )
    }
    return (
        <div>
            <AdminNavbar />

            <div className="condiv">
                <div style={{ display: 'flex', marginLeft: '40%', marginTop: '22%' }}>
                    <Button variant="contained" onClick={() => { setMarket('open') }} style={{ backgroundColor: market === 'open' ? 'green' : 'white' }}>Open Market</Button>
                    <Button variant="contained" onClick={() => { setMarket('close') }} style={{ backgroundColor: market === 'close' ? 'green' : 'white' }}>Close Market</Button>
                </div>
                <div style={{ flexDirection: 'row', marginLeft: '43%', marginTop: 30 }}>
                    <TextField
                        id="date"
                        label="From Date"
                        type="date"
                        value={fromDate}
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {setFromDate(event.target.value)}}
                    />
                </div>
                <div style={{ flexDirection: 'row', marginLeft: '43%', marginTop: 30 }}>
                    <TextField
                        id="date"
                        label="T0 Date"
                        value={toDate}
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {settoDate(event.target.value)}}
                    />
                </div>
                <div style={{ flexDirection: 'row', marginLeft: '43%', marginTop: 30 }}>
                    <Button variant="contained" onClick={() => {executeOrder()}}>Execute Order</Button>
                </div>
            </div>
        </div >
    )
}
export default Admin
