import axios from 'axios';
// import * as axiosWrapper from 'D:/common4/formsInfra/src/networking/axios';
import axiosWrapper from 'D:/common4/formsInfra/src/networking/axios';

jest.mock('axios');

describe('axiosWrapper', () => {
    it('should be defined', () =>{
        expect(axiosWrapper).toBeDefined();
    });
    describe('request method', () => {
        let settings = {};
        
        beforeEach(() => {
            settings = {
                url: 'fakedURL',
                method: 'GET'
            };
            
            const resp = {data: {name: 'Bob'}};
            axios.mockResolvedValue(resp);

          });
        
          it('should be defined', () => {
            expect(axiosWrapper).toBeDefined();
        });

        describe('params', () => {
            it('settings object is mandatory ', () => {
                expect(() => { axiosWrapper(); }).toThrow();
            });
            it('settings must be an object', () => {
                expect(() => { axiosWrapper(JSON.stringify(settings)).toThrow(); });
            });

            it('url is mandatory ', () => {
                expect(() => { axiosWrapper({ method: settings.method }); }).toThrow();
            });

            it('method is mandatory ', () => {
                expect(() => { axiosWrapper({ url: settings.url }); }).toThrow();
            });

            it('method is case sensitive ', () => {
                expect(() => { axiosWrapper({ url: settings.url, METHOD: settings.method }); }).toThrow();
            });

            it('url is case sensitive ', () => {
                expect(() => { axiosWrapper({ URL: settings.url, method: settings.method }); }).toThrow();
            });

            it('only url and method are mandatory ', () => {
                expect(() => { axiosWrapper(settings); }).not.toThrow();
            });

            it('POST method is valid ', () => {
                expect(() => { axiosWrapper({ url: settings.url, method: 'POST' }); }).not.toThrow();
            });

            it('DELETE method is invalid ', () => {
                expect(() => { axiosWrapper({ url: settings.url, method: 'DELETE' }); }).toThrow();
            });

            it('PUT method is invalid ', () => {
                expect(() => { axiosWrapper({ url: settings.url, method: 'PUT' }); }).toThrow();
            });
        });

        describe('return a promise', function () {

            it('success handler is called when promise is resolved', function () {                

                // const resp = {data: {name: 'Bob'}};
                // axios.mockResolvedValue(resp);

                axiosWrapper(settings).then(res => {
                    expect(typeof res).toEqual('object');
                    expect(res).toEqual(resp);                
                });                
            });

            xit('compose resolved promises', function (done) {

                spyOn($, 'ajax').and.callFake(fakedPromiseResolver);

                var moreResults;

                ajax.request(settings)
                    .then(function (response) { result = response; return ajax.request(settings); }, function (jqXHR) { result = jqXHR; })
                    .then(function (response) { moreResults = response; }, function (jqXHR) { result = jqXHR; })
                    .done(function () {
                        expect(typeof result).toEqual('object');
                        expect(result.name).toEqual(fakedSuccessResponse.name);
                        expect(moreResults.name).toEqual(fakedSuccessResponse.name);
                        done();
                    });
            });

            xit('failure handler callback is called when promise is rejected', function (done) {

                spyOn($, 'ajax').and.callFake(fakedPromiseRejector);

                ajax.request(settings)
                    .then(function (response) { result = response; }, function (jqXHR) { result = jqXHR; })
                    .done(function () {
                        expect(typeof result).toEqual('object');
                        expect(result.responseText).toEqual(fakedFailureResponse.responseText);
                        done();
                    });
            });

            xit('failure handler is called when promise is rejected', function (done) {

                spyOn($, 'ajax').and.callFake(fakedPromiseRejector);

                ajax.request(settings)
                    .then(function (response) { result = response; })
                    .fail(function (jqXHR) { result = jqXHR; })
                    .done(function () {
                        expect(typeof result).toEqual('object');
                        expect(result.responseText).toEqual(fakedFailureResponse.responseText);
                        done();
                    });
            });
            xit('url and method set on error object when promise is rejected', function (done) {
                spyOn($, 'ajax').and.callFake(fakedPromiseRejector);
                ajax.request(settings)
                    .fail(function (jqXHR) {
                        expect(jqXHR.url).toEqual(settings.url);
                        expect(jqXHR.method).toEqual(settings.method);
                        done();
                    });

            });

        });
    });
});
