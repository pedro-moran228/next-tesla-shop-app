import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "themes";
import { SWRConfig } from "swr";
import { UiProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                fetcher: (resource, init) =>
                    fetch(resource, init).then((res) => res.json()),
            }}
        >
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <UiProvider>
                    <Component {...pageProps} />
                </UiProvider>
            </ThemeProvider>
        </SWRConfig>
    );
}
