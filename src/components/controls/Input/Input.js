import Field from './Field/Field'

class Input extends Field{
    
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = function(event) {
        const target = event.target;
        this.props.update(this.props.name, target.value);
    };
      
    render(){
        return(
            <input onChange={this.handleInputChange} className="text-field" value={this.value} namespace={this.props.namespace}  id={this.props.id}/>             
        );
    }
}
function mapStateToProps(state) {
    return { manager: state.CompanyUsers.manager,  employee: state.CompanyUsers.employee}
  }

export default connect()(Input)