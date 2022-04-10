const components = {
    MuiAvatar: {
        styleOverrides: {
            fallback: {
                height: '75%',
                width: '75%',
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
            },
        },
    },
    MuiCssBaseline: {
        styleOverrides: {
            '*': {
                boxSizing: 'border-box',
            },
            html: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                height: '100%',
                width: '100%',
            },
            body: {
                height: '100%',
            },
            '#root': {
                height: '100%',
            },
            '#nprogress .bar': {
                zIndex: '2000 !important',
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '6px',
                boxShadow: 'rgba(50, 50, 93, 0.025) 0px 2px 5px -1px, rgba(0, 0, 0, 0.05) 0px 1px 3px -1px',
                backgroundImage: 'none',
            },
        },
    },
    MuiCardHeader: {
        defaultProps: {
            titleTypographyProps: {
                variant: 'h3',
            },
        },
    },
    MuiLink: {
        styleOverrides: {
            action: {
                marginTop: '-4px',
                marginRight: '-4px',
            },
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 'auto',
                marginRight: '16px',
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none',
            },
        },
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
            },
        },
    },
};
  
export default components;