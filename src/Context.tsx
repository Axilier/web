import { createContext, Dispatch, SetStateAction } from "react";

interface App {
    apiUrl: string;
    user: {} | null;
    setUser: Dispatch<SetStateAction<{} | null>> | (() => void);
}

/* eslint import/prefer-default-export: 0 */

export const AppContext = createContext<App>({
    apiUrl: "",
    user: null,
    setUser: () => {},
});
