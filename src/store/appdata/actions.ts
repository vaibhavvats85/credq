import { AppData } from "../../models/AppData";

export const APP_DATA = '[APP DATA] App Data';
export const UPDATE_EXCEL_DATA = '[UPDATE EXCEL DATA] Update Excel Data';


interface LoadAppData {
    type: typeof APP_DATA,
    payload: AppData
}

export function loadAppData(payload: AppData): LoadAppData {
    console.log(payload, 'DB DATA')
    return {
        type: APP_DATA,
        payload
    }
};


export type AppDataActionTypes =
    LoadAppData;
