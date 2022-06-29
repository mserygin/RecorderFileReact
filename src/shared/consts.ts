export interface IndexedProperties {
    [key: string]: any
}

export const ESC_CODE = 27;

export interface IColors extends IndexedProperties {
    green: IColorPalette
    lightGreen: IColorPalette
    blue: IColorPalette
    darkBlue: IColorPalette
    purple: IColorPalette
    pink: IColorPalette
    red: IColorPalette
    yellow: IColorPalette
    orange: IColorPalette
}

export interface IColorPalette {
    main: string
    transparent: string
    lighter: string
    darker: string
    littleDarker: string
    light: string
    dark: string
    darkTransparent: string
    lightTransparent: string
    reallyTransparent: string
    transparentAF: string
}

export const Colors: IColors = {
    green: {
        main: '#3cd288',
        transparent: 'rgba(64, 197, 197, .3)',
        lighter: '#3cd2d2',
        darker: '#258787',
        littleDarker: '#27b56e',
        light: '',
        dark: '#2a4f2f',
        reallyTransparent: '',
        darkTransparent: '#166c217a',
        transparentAF: '#3cd2881a',
        lightTransparent: '#9fe4a982',
    },
    lightGreen: {
        main: 'rgb(64, 197, 197)',
        transparent: 'rgba(64, 197, 197, .3)',
        lighter: '#3cd2d2',
        darker: '#258787',
        light: 'rgba(105, 205, 145, 0.5)',
        dark: '#216666',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '',
        lightTransparent: '',
        littleDarker: '',
    },
    blue: {
        main: 'rgb(95, 109, 236)',
        transparent: 'rgba(95, 109, 236, .3)',
        lighter: '#7884ec',
        darker: '#414ca8',
        light: '#4a93ff',
        dark: '#3f457f',
        reallyTransparent: '#6a8dff30',
        darkTransparent: '',
        transparentAF: '#6a8dff12',
        lightTransparent: '#567dff47',
        littleDarker: '#3737b3',
    },
    darkBlue: {
        main: '#9cbbff',
        transparent: 'rgba(95, 109, 236, .3)',
        lighter: '#7884ec',
        darker: '#414ca8',
        light: '',
        dark: '#4c73ca',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '',
        lightTransparent: '',
        littleDarker: '',
    },
    purple: {
        main: 'rgb(168, 95, 236)',
        transparent: 'rgba(168, 95, 236, .3)',
        lighter: '#d079ec',
        darker: '#824eb2',
        light: '#a87eee',
        dark: '#7e3798',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '#a85fec14',
        lightTransparent: '',
        littleDarker: '',
    },
    pink: {
        main: 'rgb(236, 95, 182)',
        transparent: 'rgba(236, 95, 182, .3)',
        lighter: '#e06cb4',
        darker: '#b24788',
        light: '',
        dark: '#842b62',
        reallyTransparent: '',
        darkTransparent: '',
        transparentAF: '#ec5fb617',
        lightTransparent: '',
        littleDarker: '',
    },
    red: {
        main: 'rgb(236, 95, 107)',
        transparent: 'rgba(236, 95, 107, .3)',
        lighter: '#f67b86',
        darker: '#b63c46',
        light: '',
        dark: '#632d32',
        littleDarker: '#b33b3b',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '',
        lightTransparent: '#e2799273',
    },
    yellow: {
        main: '#ee9e44',
        transparent: 'rgba(236, 95, 107, .3)',
        lighter: '#f67b86',
        darker: '#b63c46',
        light: '',
        dark: '#632d32',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '',
        lightTransparent: '',
        littleDarker: '',
    },
    orange: {
        main: '#ee9e44',
        transparent: '#ff520014',
        lighter: '#ee9e44',
        darker: '#ae4a1b',
        light: '',
        dark: '#e97944',
        reallyTransparent: '',
        darkTransparent: '#511a1ea3',
        transparentAF: '',
        lightTransparent: '#ffd7a67d',
        littleDarker: '#c75e1d',
    },
}
