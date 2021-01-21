export const initialState = {
    request: {
        error: false,
        code: 0,
        message: '',
    },
    userInfo: {
        name: '',
        isLog: false,
        isPlay: false,
        movieList: [],
    },
    moviesSectionA: [],
    moviesSectionB: [],
    moviesSectionC: [],
};

export const loadState = () => {
    try{
        const serializeState = localStorage.getItem('movies');
        
        if(!serializeState){
            return initialState;
        }

        return JSON.parse(serializeState);
    }catch(err){
        console.error(err);
        return initialState;
    }
};

export const saveSate = (state) => {
    try{
        const serializeState = JSON.stringify(state);
        localStorage.setItem('movies',serializeState);
    }catch(err){
        console.error(err);
    }
};
