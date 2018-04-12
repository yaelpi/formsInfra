import { types } from "mobx-state-tree"
const Language = types.model({
    name:  types.string,
})
.actions(self => {
    function setLanguage(newName) {
        self.name = newName
    }
    return {setLanguage}
})
export default Language;
