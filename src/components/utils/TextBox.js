import React from 'react';
import {
    Form, Row, Col
} from 'react-bootstrap';


const CustomTextBox = (props) => {

    return (
        <Form.Group >
            <Form.Label  >{props.txtBoxLabel}</Form.Label>
            <Form.Control
                type={props.txtBoxType}
                id={props.txtBoxID}
                placeholder={props.txtBoxPH}
                value={props.txtBoxValue}
                onChange={props.changeEvent}
                name={props.txtBoxName}
                required
            />
        </Form.Group>

    )
}

export default CustomTextBox;
