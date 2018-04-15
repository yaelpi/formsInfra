import React from 'react'
import {observer, inject} from 'mobx-react'
import {observable} from 'mobx'
import Field from '../controls/Field/Field';
import injectWrapper from '../../core/inject'

@observer
export default class Language extends React.Component{
    
    constructor(props) {
        super(props);
               
        this.texts = {
            hebrew: {
                firstName: ' שם פרטי',
                lastName: ' שם משפחה'
            },
            english: {
                firstName: 'first name',
                lastName:'last name'
            },
            arabic: {
                firstName: 'first name',
                lastName:'last name'
            }
        }
        this.currentResources = this.currentResources.bind(this);

    }
    currentResources = function(){
        return this.texts[this.props.formLanguage.name];
    };
      
    render(){
        const FirstName = injectWrapper(Field,{
            field: this.props.firstName
        });
        const LastName = injectWrapper(Field,{
            field: this.props.lastName
        });
       
        return(
            <div className="row">
                <div className="col-md-4">
                    <FirstName label={this.currentResources().firstName}/>
                </div>
                <div className="col-md-4">
                    <LastName label={this.currentResources().lastName}/>
                </div>            
            </div>
           
        );
    }
}