import { types } from "mobx-state-tree"
import Field  from "../controls/Field/store"
const PersonalInformation = types.model({
    firstName:  Field,
    lastName:  Field
})

export default PersonalInformation;
