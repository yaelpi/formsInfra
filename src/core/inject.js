import {inject} from 'mobx-react';

const injectWrapper = function(wrappedObject, customizeStore = {}){
    return inject(
        stores => ( Object.assign({
            formLanguage: stores.rootStore.formlanguage
        }, customizeStore))
    )(wrappedObject);
};
export default injectWrapper;