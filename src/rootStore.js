import Language from '../src/components/language/store';
import { types } from "mobx-state-tree";

const RootStore = types.model({
    formlanguage: Language
})
export default  RootStore.create({
    formlanguage: {name: 'hebrew'}
})