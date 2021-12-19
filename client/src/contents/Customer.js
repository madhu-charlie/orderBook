import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React from 'react';
import CustomerNavbar from '../components/CustomerNavbar';
import '../Styles/Registrationc.css';

function Admin(props) {
    // const submitHandler = () => {
    //     const data = {
    //         "rationId": rationNumber,
    //         "members": members,
    //         "phone": phone,
    //         "address": address
    //     }
    //     axios.post('http://localhost:3001/addData', { data }).then(
    //         function (res) {
    //             // console.log(res);
    //         }
    //     )
    // }
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <CustomerNavbar />

            <div className="condiv">
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', margin: 30 }}>
                    <div style={{ textAlign: 'center', paddingTop: 20 }}>
                        Search Stock
                    </div>
                    <FormControl style={{ width: 200 }}>
                        <InputLabel id="demo-simple-select-label">Stock</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={'DBS'}>DBS</MenuItem>
                            <MenuItem value={'Amazon'}>Amazon</MenuItem>
                            <MenuItem value={'30'}>Flipkart</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', margin: 30 }}>
                    <div style={{ textAlign: 'center', }}>
                        Order Type
                    </div>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Limit" />
                            <FormControlLabel value="male" control={<Radio />} label="Marker" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', margin: 30 }}>
                    <div style={{ textAlign: 'center', paddingTop: 20 }}>
                        Price
                    </div>
                    <div style={{marginLeft: 60}}>
                        <TextField
                            id="filled-search"
                            label="Price"
                            type="search"
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', margin: 30 }}>
                    <div style={{ textAlign: 'center', paddingTop: 20 }}>
                        Quantity
                    </div>
                    <TextField
                        id="filled-search"
                        label="quantity"
                        type="search"
                    />
                </div>
                <div style={{ position: 'absolute', top: '50%', marginLeft: '50%' }}>
                    <Button variant="contained">Place Order</Button>
                </div>
            </div>
        </div >
    )
}
export default Admin
