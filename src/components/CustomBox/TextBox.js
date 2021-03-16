import React from 'react';
import {
    Form,Row,Col
} from 'react-bootstrap';


const CustomTextBox = (props) =>{
    
    return (
        <Form.Group as={Col} style={{paddingBottom:"20px"}}>
        <Form.Label style={{marginTop:"10px",fontSize:"18px"}}  >{props.txtBoxLabel}</Form.Label>
        <Col >
            <Form.Control type={props.txtBoxType}  id={props.txtBoxID}
             placeholder={props.txtBoxPH} 
             value={props.txtBoxValue}
             onChange={props.changeEvent}
             name={props.txtBoxName}
             style={{padding:"8px"}}
             required
             />
        </Col>
    </Form.Group>

    )
}

export default CustomTextBox;
