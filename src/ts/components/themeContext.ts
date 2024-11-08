import * as React from 'react';

export interface Theme {
    foreground: string;
    background: string;
    buttonBackground: string;
    windowBorder: string;
    windowSelectedBorder: string;
    lightBorder: string;
    tabItemHover: string;
    menuItemHover: string;
    buttonHover: string;
    headerBackground: string;
    closedGray: string;
    headerButtonColor: string;
    headerButtonHover: string;
    tabCloseHoverBackground: string;
    revertColor: string;
    revertHover: string;
    scrollbarColor: string;
}

export interface ThemeMap {
    light: Theme;
    dark: Theme;
    nhdark: Theme;
}
export type ThemeName = keyof ThemeMap;

export const themes: ThemeMap = {
    light: {
        foreground: '#000000',
        background: '#ffffff',
        buttonBackground: '#ffffff',
        windowBorder: '#bababa',
        windowSelectedBorder: '#808080',
        lightBorder: '#cacaca',
        tabItemHover: '#cacaca',
        menuItemHover: '#f8f9fa',
        buttonHover: '#999999',
        headerBackground: '#ebe9eb',
        closedGray: '#979ca0',
        headerButtonColor: '#888888',
        headerButtonHover: '#000000',
        tabCloseHoverBackground: '#5f6368',
        revertColor: '#7472ff',
        revertHover: '#1d1aff',
        scrollbarColor: 'light'
    },
    dark: {
        foreground: '#ffffff',
        background: '#1e1e1e',
        buttonBackground: '#333333',
        windowBorder: '#555555',
        windowSelectedBorder: '#bababa',
        lightBorder: '#cacaca',
        tabItemHover: '#444444',
        menuItemHover: '#555555',
        buttonHover: '#999999',
        headerBackground: '#141414',
        closedGray: '#888888',
        headerButtonColor: '#888888',
        headerButtonHover: '#dddddd',
        tabCloseHoverBackground: '#5f6368',
        revertColor: '#7472ff',
        revertHover: '#b4b3ff',
        scrollbarColor: 'dark'
    },
    nhdark: {
        foreground: '#cccccc',
        background: '#222222',
        buttonBackground: '#333333',
        windowBorder: '#343536',
        windowSelectedBorder: '#343536',
        lightBorder: '#cacaca',
        tabItemHover: '#424345',
        menuItemHover: '#424345',
        buttonHover: '#424345',
        headerBackground: '#141415',
        closedGray: '#888888',
        headerButtonColor: '#cccccc',
        headerButtonHover: '#ffffff',
        tabCloseHoverBackground: '#5f6368',
        revertColor: '#7472ff',
        revertHover: '#b4b3ff',
        scrollbarColor: 'dark'
    }
};
export const ThemeContext = React.createContext(
    themes.nhdark // default value
);
