import { createContext, Dispatch, SetStateAction } from "react";

interface App {
    apiUrl: string;
    user: any;
    setUser: Dispatch<SetStateAction<{}>> | (() => void);
}

/* eslint import/prefer-default-export: 0 */

export const AppContext = createContext<App>({
    apiUrl: "",
    user: {},
    setUser: () => {},
});
