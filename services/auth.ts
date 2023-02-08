import { komtimAxiosIns } from 'helpers/headers';
import { LOGIN } from 'helpers/url';
import { useMutation } from 'react-query';

const login = useMutation(payload => komtimAxiosIns.post(LOGIN, payload), {
    onSuccess: (data, variables, context) => {
        console.log(data);
        console.log(variables);
        console.log(context);
    },
    onError: (err, variables, context) => {
        console.log(err);
        console.log(variables);
        console.log(context);
    },
});

export { login };
