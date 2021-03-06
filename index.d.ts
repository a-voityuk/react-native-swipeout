import React from 'react';

declare module 'react-native-swipeout' {
    export interface SwipeoutButtonProperties {
        backgroundColor?: string;
        color?: string;
        component?: JSX.Element;
        onPress?(): void;
        text?: string;
        type?: 'default'|'delete'|'primary'|'secondary';
        underlayColor?: string;
        disabled?: boolean;
    }

    export interface SwipeoutProperties {
        autoClose?: boolean;
        backgroundColor?: string;
        close?: boolean;
        disabled?: boolean;
        left?: SwipeoutButtonProperties[];
        onOpen?(ref: Object, sectionId: number, rowId: number, direction: string): void;
        onClose?(ref: Object, sectionId: number, rowId: number, direction: string): void;
        onPanStart?(ref: Object): void;
        onPanMove?(ref: Object): void;
        onPanEnd?(ref: Object): void;
        right?: SwipeoutButtonProperties[];
        scroll?(): void;
        style?: Object;
        sensitivity?: number;
        buttonWidth?: number;
        rowId?: number;
        sectionId?: number;
    }

    export default class Swipeout extends React.Component<SwipeoutProperties,any> {}
}
