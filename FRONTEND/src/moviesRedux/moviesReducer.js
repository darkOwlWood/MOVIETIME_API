export const reducers = {

    cleanRequest: state => {
        state.request.error = false;
        state.request.code = 0;
        state.request.message = '';
    }

};