import React from 'react'
import {observer, inject} from 'mobx-react'
import {observable} from 'mobx'
@observer
export default class Language extends React.Component{
    
    constructor(props) {
        super(props);
               
        this.texts = {
            hebrew: {
                selectLanguage: 'בחירת שפה'
            },
            english: {
                selectLanguage: 'select Language'
            },
            arabic: {
                selectLanguage: 'בחירת שפה'
            }
        }
        this.currentResources = this.currentResources.bind(this);

    }
    currentResources = function(){
        return this.texts[this.props.formLanguage.name];
    };
      
    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <label><span>{this.currentResources().selectLanguage}</span></label>
                    <input type="radio" onChange={e => this.props.formLanguage.setLanguage('hebrew')} className="text-field" value={'hebrew'} name="language" />
                    <label  className="label-radio-combined">
						<span>עברית</span>
					</label>
                    <input type="radio" onChange={e => this.props.formLanguage.setLanguage('english')} className="text-field" value="english" name="language" />
                    <label  className="label-radio-combined">
						<span>אנגלית</span>
					</label>
                </div>
              
            </div>
        );
    }
}