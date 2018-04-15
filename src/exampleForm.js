import React, { Component } from 'react';
import Input from './components/controls/Input/Input';
import Form from './components/controls/Form/Form';
import hebrewValidations from './validations/languages';
import Language from '../src/components/language/language';
import PersonalInformation from '../src/components/PersonalInformation/PersonalInformation';
import injectWrapper from './core/inject'
import rootStore from './rootStore'

export default class ExampleForm extends Component { // destruct non-valid props
    constructor(props){
        super(props)
        this.validateAll = this.validateAll.bind(this);
    }
    validateAll= function(){
        this.Form.validateAll();
    }
    
    render() {
        const Wrappedlanguage = injectWrapper(Language)
        const UserDetails = injectWrapper(PersonalInformation,{...rootStore.userDetails})
        return(
            <Form ref={c => { this.Form = c }}>

                <Wrappedlanguage/>
                <UserDetails/>
                <div className="row">
                    <div className="small-12 columns">
                        <button className="button" type="button" onClick={this.validateAll} >בדוק תקינות  </button>
                    </div>
                </div>
            </Form>
        )
    }
};