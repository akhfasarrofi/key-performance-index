import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props: JSX.IntrinsicAttributes & AlertProps,
    ref: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ open }: { open?: boolean }) => {
    const [hola, setOpen] = React.useState(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(!hola);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity="success">
                This is a success message!
            </Alert>
        </Snackbar>
    );
};

export default React.memo(Toast);
