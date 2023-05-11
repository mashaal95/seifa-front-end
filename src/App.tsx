import { ColourContext, useColourMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './Pages/Global/topbar';
import Dashboard from './Pages/Dashboard';
// import SeifaBar from './Pages/SeifaBar';
// import SeifaTable from './Pages/SeifaTable';
import { Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import ReactSidebar from './Pages/Global/sidebar';

function App() {
  const [theme, colourMode] = useColourMode();

  return (
    <ProSidebarProvider>
      <ColourContext.Provider value={colourMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="app">
            <ReactSidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
              {/* <Route path="/" element={<SeifaBar />} />
            <Route path="/" element={<SeifaTable />} /> */}
            </main>
          </div>
        </ThemeProvider>
      </ColourContext.Provider>
    </ProSidebarProvider>
  );
}

export default App;
