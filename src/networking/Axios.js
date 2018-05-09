import axios from 'axios';

const messages = {
    missinggRequiredParams: 'URL and method (GET/POST) parameters are mandatory',
};

const validMethod = function (method) {
    return ['GET', 'POST'].includes(method);
};

const checkRequiredParams = function (settings) {    
    return (typeof settings === 'object' && 'url' in settings && validMethod(settings['method']));
};

const preparePostData = function () {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.transformRequest = [function (data, headers) {
        var str = [];
        for(var p in data)
        if (data.hasOwnProperty(p) && data[p]) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
        return str.join("&");
    }];
};

const request = function (settings) {

    if (!checkRequiredParams(settings)) {
        throw new Error(messages.missinggRequiredParams);
    }

    preparePostData();

    return axios(settings)
        .catch(function (error) {
            error.url = settings.url;
            error.method = settings.method;
            throw error;
        });

};

export default request ;
