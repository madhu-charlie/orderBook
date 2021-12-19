import { Input,Button } from '@material-ui/core';
import React, { Component, useState, useEffect } from 'react';
import Navbar from '../components/AdminNavbar';
import '../Styles/Searchc.css'
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter, Table, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import jsPDF from 'jspdf'
import logo from '../img/one.png'
import logo1 from '../img/jj.png'


function Search() {
    const [rationNumber, setRationNumber] = useState(0);
    const [result, setresult] = useState(false);
    const [arr,setarr] = useState([]);
    const [allusers,setallusers] = useState([]);
    const [faddress,setfaddress] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [ration, setration] = useState("")
    useEffect(() => {
        axios.post('http://localhost:3001/getAllData', {}).then(
            function(res) {
                res.data.map((a)=>{
                    setallusers(allusers=>[...allusers,a])
                })
            }
        )
    }, [])
    const getSearchResults = () => {
        const data = {
            "searchText":rationNumber,
        }
        axios.post('http://localhost:3001/getData', {data}).then(
            function(res) {
                res.data.map((m)=>{
                    setfaddress(m.address)
                    setphonenumber(m.phone)
                    setration(m.rationId)
                    setarr(arr=>[...arr,m])
                })
            }
        )
    }
    let g = 0;
    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        doc.addImage(logo, 'JPEG', 15, 20, 60, 60);
        doc.addImage(logo1, 'JPEG', 520, 20, 60, 60);
        doc.setFontSize(19);
        doc.text('NUNNA GRAMA RAJAKA JANA SEVA SANGHAM', 80, 50);
        doc.setFontSize(15)
        doc.text('(Regd. No.45656, C.C.No:56456)',170, 80);
        doc.text('Nunna Village, Dhobi Ghat Center, High School Road ,Vijayawada Rural Mandal,', 50, 110);
        doc.text('Krishna District, Pin code : 521212, Contact:7075606998', 130, 130); 
        doc.text('-------------------------------------------------------------------------------------------------------------------------- ', 0, 145); 
        doc.text('PAN CARD NUMBER : '+ ration,50,192);
        doc.text('PHONE NUMBER       : '+ phonenumber ,50,222)
        doc.text('-----------------------------------------------------------------------------------------------------------------', 18, 250);
        doc.text('FULL NAME',65,272);
        doc.text('AADHAR NUMBER',195,272);
        doc.text('GENDER',375,272);
        doc.text('AGE',480,272);
        doc.text('-----------------------------------------------------------------------------------------------------------------', 18, 290);
        doc.text('|',18,295);
        doc.text('|',18,293);
        doc.text('|',18,292);
        doc.text('|',18,289);
        doc.text('|',18,287);
        doc.text('|',18,285);
        doc.text('|',18,283);
        doc.text('|',18,281);
        doc.text('|',18,279);
        doc.text('|',18,277);
        doc.text('|',18,275);
        doc.text('|',18,273);
        doc.text('|',18,271);
        doc.text('|',18,269);
        doc.text('|',18,267);
        doc.text('|',18,265);
        doc.text('|',18,263);
        doc.text('|',18,261);
        doc.text('|',18,259);
        doc.text('|',18,257);
        doc.text('|',18,267);
        // 
        doc.text('|',580,295);
        doc.text('|',580,293);
        doc.text('|',580,292);
        doc.text('|',580,289);
        doc.text('|',580,287);
        doc.text('|',580,285);
        doc.text('|',580,283);
        doc.text('|',580,281);
        doc.text('|',580,279);
        doc.text('|',580,277);
        doc.text('|',580,275);
        doc.text('|',580,273);
        doc.text('|',580,271);
        doc.text('|',580,269);
        doc.text('|',580,267);
        doc.text('|',580,265);
        doc.text('|',580,263);
        doc.text('|',580,261);
        doc.text('|',580,259);
        doc.text('|',580,257);
        doc.text('|',580,267);
        let variable = 290;
        arr.map((m)=>{
            variable = variable + 40;
            doc.text('|',18,variable);
            doc.text('|',18,variable-8);
            doc.text('|',18,variable-10);
            doc.text('|',18,variable-13);
            doc.text('|',18,variable-15);
            doc.text('|',18,variable-17);
            doc.text('|',18,variable-19);
            doc.text('|',18,variable-22);
            doc.text('|',18,variable-12);
            doc.text('|',18,variable-7);
            doc.text('|',18,variable-1);
            doc.text('|',18,variable-2);
            doc.text('|',18,variable-3);
            doc.text('|',18,variable-4);
            doc.text('|',18,variable-5);
            doc.text('|',18,variable+3);
            doc.text('|',18,variable+4);
            doc.text('|',18,variable+5);
            doc.text('|',18,variable+6);
            doc.text('|',18,variable+7);
            doc.text('|',18,variable+8);
            // 
            doc.text('|',580,variable);
            doc.text('|',580,variable-8);
            doc.text('|',580,variable-10);
            doc.text('|',580,variable-13);
            doc.text('|',580,variable-15);
            doc.text('|',580,variable-17);
            doc.text('|',580,variable-19);
            doc.text('|',580,variable-22);
            doc.text('|',580,variable-12);
            doc.text('|',580,variable-7);
            doc.text('|',580,variable-1);
            doc.text('|',580,variable-2);
            doc.text('|',580,variable-3);
            doc.text('|',580,variable-4);
            doc.text('|',580,variable-5);
            doc.text('|',580,variable+3);
            doc.text('|',580,variable+4);
            doc.text('|',580,variable+5);
            doc.text('|',580,variable+6);
            doc.text('|',580,variable+7);
            doc.text('|',580,variable+8);
            doc.text(m.name,30,variable);
            doc.text(m.aadharNumber,200,variable);
            doc.text(m.gender,370,variable);
            doc.text(String(m.age),480,variable);
            g = variable;
        })
        doc.text('-----------------------------------------------------------------------------------------------------------------', 18, variable+17);
        doc.text("ADDRESS : " +faddress,50,g+40);
        doc.save('demo.pdf')
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let total_users = 0;
    return (
            <div>
                <Navbar />
                    <div>
                        <div className="condiv">
                            <div>
                                <InputGroup>
                                        <Input placeholder="Search Here..." onChange={(event) => setRationNumber(event.target.value)} />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupAddon>
                                        <Button class="learn-more" onClick={() => {setarr([]);getSearchResults();toggle()}}><i class="fa fa-search"></i> Search</Button>
                                    </InputGroupAddon>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                            <div className="alluser_details">
                                <Table striped bordered hover responsive="xl" dark>
                                        <thead>
                                            <tr>
                                            <th>S.NO</th>
                                            <th>RATION CARD NUMBER</th>
                                            <th>FULL NAME </th>
                                            <th>AADHAR NUMBER</th>
                                            <th>GENDER</th>
                                            <th>AGE</th>
                                            </tr>
                                        </thead>
                                        {allusers.map((a)=>{
                                            total_users = total_users + 1;
                                            return(
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">{total_users}</th>
                                                    <td>{a.rationId}</td>
                                                    <td>{a.name}</td>
                                                    <td>{a.aadharNumber}</td>
                                                    <td>{a.gender}</td>
                                                    <td>{a.age}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </Table>
                            </div>
                            <div>
                            <Modal isOpen={modal}  size="lg">
                                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <Table striped bordered hover responsive="xl">
                                        <thead>
                                            <tr>
                                            <th>RATION CARD NUMBER</th>
                                            <th>FULL NAME </th>
                                            <th>AADHAR NUMBER</th>
                                            <th>GENDER</th>
                                            <th>AGE</th>
                                            </tr>
                                        </thead>
                                        {arr.map((a)=>{
                                            return(
                                                <tbody>
                                                    <tr>
                                                    <td>{a.rationId}</td>
                                                    <td>{a.name}</td>
                                                    <td>{a.aadharNumber}</td>
                                                    <td>{a.gender}</td>
                                                    <td>{a.age}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </Table>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="secondary" onClick={()=>{generatePDF()}}>Print</Button>
                                <Button color="secondary" onClick={()=>{toggle();setarr([])}}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            </div>
                        </div>
                    </div>
            </div>
            )
}

export default Search