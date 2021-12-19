import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React from 'react';
import CustomerNavbar from '../components/CustomerNavbar';
import '../Styles/Registrationc.css';
import axios from 'axios';

function Admin() {
    const [stock, setstock] = React.useState(null);
    const [orderType, setOrderType] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [quantity, setquantity] = React.useState(null);
    const handleChange = (event) => {
        setstock(event.target.value);
    };
    const placeOrder = () => {
        const data = {
            "stock": stock,
            "ordertype": orderType,
            "price": price,
            "quantity": quantity
        }
        axios.post('http://localhost:3001/addcategory', { data }).then(
            function (res) {
                console.log(res);
            }
        )
    }
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
                            value={stock}
                            label="stock"
                            onChange={handleChange}
                        >
                            <MenuItem value={'DBS'}>DBS</MenuItem>
                            <MenuItem value={'Amazon'}>Amazon</MenuItem>
                            <MenuItem value={'Flipkart'}>Flipkart</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', margin: 30 }}>
                    <div style={{ textAlign: 'center', }}>
                        Order Type
                    </div>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={(event) => { setOrderType(event.target.value) }}>
                            <FormControlLabel value="limit" control={<Radio />} label="Limit" />
                            <FormControlLabel value="market" control={<Radio />} label="Market" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', margin: 30 }}>
                    <div style={{ textAlign: 'center', paddingTop: 20 }}>
                        Price
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <TextField
                            id="filled-search"
                            label="Price"
                            type="search"
                            value={price}
                            onChange={(event) => { setPrice(event.target.value) }}
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
                        value={quantity}
                        onChange={(event) => { setquantity(event.target.value) }}
                    />
                </div>
                <div style={{ position: 'absolute', top: '50%', marginLeft: '50%' }}>
                    <Button variant="contained" onClick={() => { placeOrder() }}>Place Order</Button>
                </div>
            </div>
        </div >
    )
}
export default Admin
