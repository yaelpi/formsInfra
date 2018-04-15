import Language from '../src/components/language/store';
import PersonalInformation from '../src/components/PersonalInformation/store';
import { types } from "mobx-state-tree";

const RootStore = types.model({
    formlanguage: Language,
    userDetails:PersonalInformation
})
export default  RootStore.create({
    formlanguage: {name: 'hebrew'},
    userDetails:{firstName:{value:""},lastName:{value:""}}
})