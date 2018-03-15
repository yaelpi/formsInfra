import React, { Component } from 'react';
import Input from './components/controls/Input/Input';
import Form from './components/controls/Form/Form';
import hebrewValidations from './validations/languages';
export default class ExampleForm extends Component { // destruct non-valid props
    constructor(props){
        super(props)
        this.validateAll = this.validateAll.bind(this);
    }
    validateAll= function(){
        this.Form.validateAll();
    }
    render() {
        return(
            <Form ref={c => { this.Form = c }}>
                <div className="row">
                    <div className="col-md-4">
                        <label>
                            שם פרטי
                        </label>
                        <Input
                        type="text"
                        name="lastname"
                        validations={[hebrewValidations.required]}/>
                    </div>
                    <div className="col-md-4">
                        <label>
                            שם משפחה
                        </label>
                        <Input
                        type="text"
                        name="lastname"
                        validations={[hebrewValidations.required, hebrewValidations.hebrewName]}/>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 columns">
                        <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                    </div>
                </div>
            </Form>
        )
    }
};