import React from 'react';
import {
    Form,Row,Col
} from 'react-bootstrap';


const CustomTextBox = (props) =>{
    
    return (
        <Form.Group as={Col}>
        <Form.Label className={props.style} >{props.txtBoxLabel}</Form.Label>
        <Col>
            <Form.Control type={props.txtBoxType}  id={props.txtBoxID}
             placeholder={props.txtBoxPH} 
             value={props.txtBoxValue}
             onChange={props.changeEvent}
             name={props.txtBoxName}
             required
             />
        </Col>
    </Form.Group>
//     <Form.Group as={Row}>
//     <Form.Label htmlFor={props.htFor} className={props.style}>{props.txtBoxLabel}</Form.Label>
//     <Col>
//         <Form.Control type={props.txtBoxType}  id={props.txtBoxID}
//          placeholder={props.txtBoxPH} 
//          value={props.txtBoxValue}
//          onChange={props.changeEvent}
//          pattern={props.txtBoxPattern}
//          name={props.txtBoxName}
//          ref={props.txtRef}
//          accept={props.accept}
//          required
//          />
//     </Col>
// </Form.Group>
    )
}

export default CustomTextBox;
{/* <CustomTextBox
                            style = ""
                            txtBoxLabel =""
                            txtBoxType =""
                            txtBoxName = ""
                            txtBoxValue = ""
                            txtBoxID = ""
                            txtBoxPH =""
                            changeEvent = ""
                            /> */}
