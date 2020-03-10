// import { EMPTY_OBJECT, EMPTY_ARRAY } from 'utils';
export const EMPTY_ARRAY = [];
export const EMPTY_STRING = '';
export const EMPTY_OBJECT = {};

const initialState = {
    requesting: false,
    requested: false,
    successful: false,
    errors: EMPTY_ARRAY
};

function apiReducer([REQUESTING, SUCCESS, ERROR, CLEAR = '-CLEAR-']) {
    return (state = initialState, action) => {
        switch (action.type) {
            case CLEAR:
                return { ...initialState };

            case REQUESTING:
                return {
                    ...initialState,
                    requesting: true
                };

            case SUCCESS:
                return {
                    ...initialState,
                    successful: true,
                    requested: true,
                    requesting: false,
                    payload: action.response
                };

            case ERROR:
                return {
                    errors: state.errors.concat(action.error.errors),
                    requesting: false,
                    successful: false,
                    requested: true
                };

            default:
                return state;
        }
    };
}

function apiReducerParam([REQUESTING, SUCCESS, ERROR, CLEAR = '-CLEAR-'], actionParamField) {
    return (state = initialState, action) => {
        switch (action.type) {
            case CLEAR:
                return { ...initialState };

            case REQUESTING:
                return {
                    ...state,
                    requesting: true,
                    [action.params[actionParamField]]: EMPTY_OBJECT
                };

            case SUCCESS:
                return {
                    ...state,
                    successful: true,
                    requested: true,
                    requesting: false,
                    [action.params[actionParamField]]: action.response
                };

            case ERROR:
                return {
                    ...state,
                    errors: state.errors.concat(action.error.errors),
                    requesting: false,
                    successful: false,
                    requested: true
                };

            default:
                return state;
        }
    };
}

export { apiReducer, apiReducerParam };
