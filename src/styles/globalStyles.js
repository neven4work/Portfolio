import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '@keyframes up-and-down': {
        '0%, 100%': {
          top: '60px',
        },
        '50%': {
          top: '-20px',
        },
      },
      '@keyframes bouncing': {
        '0%, 10%, 20%, 50%, 80%, 100%': {
          transform: 'translateY(0)',
        },
        '40%, 60%': {
          transform: 'translateY(-15px)',
        },
      },
      '@keyframes trans': {
        to: {
          right: '10px',
        },
      },
      '@keyframes control-width': {
        from: {
          width: 0,
        },
        to: {
          width: '200px',
        },
      },
      '@keyframes blink': {
        from: {
          borderRightColor: '#56647575',
        },
        to: {
          borderRightColor: 'transparent',
        },
      },
    }}
  />
);

export default GlobalStyles;