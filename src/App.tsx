import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default";
import {GlobalStyle} from "./styles/global";
import {Transactions} from "./Pages/Transactions";

export function App() {
  return (
<ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
   <Transactions/>
</ThemeProvider>
  )
}

