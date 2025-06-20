import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import LatestJobs from "./components/LatestJobs";
import WorkSteps from "./components/WorkSteps";
import SoftSkills from "./components/SoftSkills";
import ContactMe from "./components/ContactMe";
import "./App.css"; // تأكد من وجود هذه السطر
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Header />
        <Landing />
        <Services />
        <Projects />
        <LatestJobs />
        <Languages />
        <WorkSteps />
        <SoftSkills />
        <ContactMe />
      </ThemeProvider>
    </div>
  );
}

export default App;
