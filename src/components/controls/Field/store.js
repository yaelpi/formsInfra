import { types } from "mobx-state-tree"
const Field = types.model({
    value:  types.optional(types.string, "")
})
.actions(self => {
    function update(newValue) {
        self.value = newValue
    }
    return {update}
})
export default Field;
