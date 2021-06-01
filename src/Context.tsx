import { createContext } from 'react';
import { App, StorageService, tableContextType } from './Types';

export const tableContext = createContext<tableContextType>({
    hoveredRow: null,
    setHoveredRow: () => null,
});

export const AppContext = createContext<App>({
    user: null,
    setUser: () => {},
    files: null,
    setFiles: () => {},
    mapProperties: {
        name: '',
        storageService: StorageService.Axilier,
    },
    setMapProperties: () => {},
});
