import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Field extends React.Component{
    
    constructor(props) {
        super(props);
        this.updateField = this.updateField.bind(this);
    }

    updateField = function(event) {
        const target = event.target;
        this.props.field.update(target.value);
    };
      
    render(){
        return(
            <div>
                <label>{this.props.label}</label>
                <input onChange={(e)=>this.updateField(e)} value={this.props.field.value} className="text-field" />             
            </div>
        );
    }
}