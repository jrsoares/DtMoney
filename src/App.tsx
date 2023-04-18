import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default";
import {GlobalStyle} from "./styles/global";

export function App() {
  return (
<ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <h1>Dt Money</h1>
</ThemeProvider>
  )
}

