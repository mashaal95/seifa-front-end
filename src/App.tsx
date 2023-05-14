import { ColourContext, useColourMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Pages/Global/topbar";
import Dashboard from "./Pages/Dashboard";
import Bar from "./Pages/SeifaBar";
import Table from "./Pages/SeifaTable";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Pages/Global/sidebar";
import AllTable from "./Pages/SeifaAll";

function App() {
  const [theme, colourMode] = useColourMode();

  return (
    <ColourContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/table" element={<Table />} />
              <Route path="/all" element={<AllTable />} />
            </Routes>

            {/* <Route path="/" element={<SeifaTable />} /> */}
          </main>
        </div>
      </ThemeProvider>
    </ColourContext.Provider>
  );
}

export default App;
