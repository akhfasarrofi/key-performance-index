import { forwardRef, ReactNode, Ref } from 'react';
import Box from '@mui/material/Box';

interface PageProps {
    children?: ReactNode
    title: string
    meta?: ReactNode
}

const Page = forwardRef(function Page(
    props: PageProps,
    ref: Ref<unknown>,
) {
    const { children, title = '', meta, ...other } = props;
    return (
        <>
            <title>{`${title} | Key Performance Index`}</title>
            {meta}

            <Box ref={ref} {...other}>
                {children}
            </Box>
        </>
    );
});

export default Page;
