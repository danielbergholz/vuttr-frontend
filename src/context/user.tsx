// import React, { createContext, useState, useCallback, useContext } from 'react';

// interface ThemeContextData {
//   theme: 'light' | 'dark';
//   changeTheme(): void;
//   lockScroll: boolean;
//   lock(lockBool: boolean): void;
// }

// const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [lockScroll, setLockScroll] = useState(false);

//   const [theme, setTheme] = useState<'light' | 'dark'>(() => {
//     const chosedTheme = localStorage.getItem('@bergdaniel:theme');

//     if (!chosedTheme) {
//       localStorage.setItem('@bergdaniel:theme', 'dark');
//       return 'dark';
//     }

//     return chosedTheme as 'light' | 'dark';
//   });

//   const changeTheme = useCallback(() => {
//     if (theme === 'dark') {
//       setTheme('light');
//       localStorage.setItem('@bergdaniel:theme', 'light');
//     } else {
//       setTheme('dark');
//       localStorage.setItem('@bergdaniel:theme', 'dark');
//     }
//   }, [theme]);

//   const lock = useCallback(
//     (lockBool: boolean) => {
//       if (lockBool) {
//         setLockScroll(!lockScroll);
//       } else {
//         setLockScroll(lockBool);
//       }
//     },
//     [lockScroll],
//   );

//   return (
//     <ThemeContext.Provider value={{ theme, changeTheme, lockScroll, lock }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export function useTheme(): ThemeContextData {
//   const context = useContext(ThemeContext);

//   return context;
// }
