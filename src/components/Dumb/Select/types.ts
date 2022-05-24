import React from "react";

export interface IOption {
    [key: string]: string,
}
  
export interface ISelect {
    options: Array <IOption | any> | null,
    searchPlaceholder?: string,
    label?: string,
    selected: IOption | any,
    clickHandler: (item: IOption | any) => void,
    customLabel?: string,
    customValue?: string,
    dropdownClassName?: number,
    selectClassName?: string,
    dataHolder?: React.ReactElement | null,
    className?: string,
    id?: string
}