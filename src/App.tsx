import { ColourContext, useColourMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './Pages/Global/topbar';

function App() {

    const [theme, colourMode] = useColourMode();

return(
  <ColourContext.Provider value = {colourMode}>
<ThemeProvider theme={theme}>
<CssBaseline />
<div className="app">
      <main className='content'> 
      <Topbar/>
      </main>
    </div>

</ThemeProvider>
  </ColourContext.Provider>
  );
}

export default App;
