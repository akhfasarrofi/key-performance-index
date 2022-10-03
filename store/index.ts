import store from './store';

export default {
    getKeys: () => {
        return Object.keys(store);
    },
    getState: (resource?: string | number) => {
        const state = store.getState();
        return resource ? state[resource] : state;
    },
};
