import * as ActionType from './contant';

const initState = {
    code: 'id',
    list: [
        { code: 'eng', text: 'English' },
        { code: 'id', text: 'Indonesia' },
    ],
};

const reducer = (state = initState, action: any) => {
    const { type, value } = action;

    switch (type) {
        case ActionType.LANG_SET:
            return { ...state, code: value };
        default:
            return state;
    }
};

export default reducer;
