import i18next from 'i18next';
import store from '../store';
import * as ActionType from './contant';

export default {
    changeLanguage: (value: string) => {
        i18next.changeLanguage(value).then(() => {
            i18next.options.lng = value;
        });

        const action = { type: ActionType.LANG_SET, value };
        store.dispatch(action);
    },
};
