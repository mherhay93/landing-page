import {idType} from "../../../types/types";

export interface IPickerItem {
    title: string;
    id: idType;
    percent?: string;
    freeze?: boolean;
    info?: string
}
