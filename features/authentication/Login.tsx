import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Iconify from 'components/Iconify';
import { FormProvider, RHFTextField } from 'hooks/hook-form';
import Toast from 'components/Toast';
import { LoginSchema, logindDfaultValues } from 'schema/login';
import { useMutation, useQuery } from 'react-query';
import { komtimAxiosIns } from 'helpers/headers';
import { LOGIN } from 'helpers/url';
import { useRouter } from 'next/router';

const getMarket = async (page = 1) => {
    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10&page=${page}`;
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error('Fetching Error');
    }
    return await response.json();
};

export default function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();
    const { data } = useQuery(['hehe', 1], () => getMarket());
    console.log(data);


    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues: logindDfaultValues,
        mode: 'onSubmit',
    });

    const { handleSubmit } = methods;
    const { mutate, isLoading, isSuccess } = useMutation(payload => komtimAxiosIns.post(LOGIN, payload), {
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

    const onSubmit = (event?: any) => {
        router.push('/dashboard');
        // mutate(event)
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <RHFTextField name="username_email" label="Email address" />

                <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                >
                                    <Iconify
                                        icon={
                                            showPassword ?
                                                'eva:eye-fill' :
                                                'eva:eye-off-fill'
                                        }
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}
            >
                <Link variant="subtitle2" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isLoading}
            >
                Login
            </LoadingButton>

            <Toast open={isSuccess} />
        </FormProvider>
    );
}
