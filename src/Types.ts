import React, { Dispatch, SetStateAction } from 'react';

export interface File {
    name: string;
    modifiedTime: string;
    createdTime: string;
    owner: string;
}

export type FileApi = {
    trashed: boolean;
    owners: Array<any>;
} & File;

export type FixedEvent = {
    className?: string;
    nodeName?: string;
} & EventTarget;

export type ErrorHandle =
    | {
          error: true;
          message: string;
      }
    | {
          error: false;
          message: undefined;
      };

export type ApiResponse = {
    content?: any;
    logInfo?: string;
} & ErrorHandle;

export interface Option {
    children: React.ReactNode;
    onClick?: () => void;
}

export enum StorageService {
    Axilier,
    Google,
}

export interface mapProperties {
    name: string;
    storageService: StorageService;
}

export interface App {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>> | (() => void);
    files: Array<File> | null | 'fetch';
    setFiles:
        | Dispatch<SetStateAction<Array<File> | null | 'fetch'>>
        | (() => void);
    mapProperties: mapProperties;
    setMapProperties: Dispatch<SetStateAction<mapProperties>> | (() => void);
}

export interface tableContextType {
    hoveredRow: number | null;
    setHoveredRow: Dispatch<SetStateAction<number | null>> | (() => void);
}

/* eslint-disable */
export type User = {
    user_id: number;
    is_admin: boolean;
    email: string;
    date_joined: string;
};

export interface GoogleUser {
    google_id: number;
    storage_connection_id?: number;
    entry_connection_id?: number;
    email_id: number;
    google_account_id: string;
}

export interface LocalUser {
    local_id: number;
    entry_connection_id: number;
    email_id: number;
}
/* eslint-enable */

export type ConnectionKeys = 'google_acc_id' | 'local_acc_id';

export interface Connection {
    request: string;
    name: string;
    icon: JSX.Element;
    onRemove: () => void;
}

export interface AccountResponse {
    email: string;
    accountId: string;
}

export type ConnectionOption = Connection & AccountResponse;
