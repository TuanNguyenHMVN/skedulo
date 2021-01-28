import { ACTIONS } from '../actions/actions';

const initialState = {
    loading: false,
    success: false,
    error: '',
    userList: [],
};
export function reducer(state = initialState, payload) {
    switch (payload.type) {
        case ACTIONS.GET_USER_LIST:
            return { ...state, loading: true };
        case ACTIONS.GET_USER_LIST_SUCCESS:
            console.log('CCCCCCCCCCCCCCCCCredux', payload.data);
            return { ...state, loading: false, userList: [...payload.data] };
        case ACTIONS.GET_USER_LIST_FAIL:
            return { ...state, loading: false, error: payload.msg };
        case ACTIONS.CLEAR_USER_LIST:
            return { ...state, loading: true };
        case ACTIONS.CLEAR_USER_LIST_SUCCESS:
            return { ...state, loading: true, userList: [...payload.data] };
        default:
            return state;
    }
}
