import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

const Spacer = ({ sx = [] }) => {
    const theme = useTheme();

    return (
        <Box
            sx={[
                {
                    backgroundColor: theme.palette.background.default
                },
                ...[sx]
            ]}
        ></Box>
    );
};

export default Spacer;