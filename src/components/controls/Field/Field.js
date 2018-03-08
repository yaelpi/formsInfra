import React from 'react'

class Field extends React.Component{
    
    constructor(props) {
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange = function(event) {
        const target = event.target;
        this.props.update(this.props.name, target.value);
    };
      
    render(){
        return(
            <input onChange={this.handleFieldChange} className="text-field" value={this.value} name={this.props.name}  id={this.props.id}/>             
        );
    }
}
export default Field
