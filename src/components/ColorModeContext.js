import React, { createContext } from 'react';

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default ColorModeContext;
