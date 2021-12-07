import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Barra from "./componentes/Barra";
import RegistrarConductor from "./componentes/RegistrarConductor";
import RegistrarServicio from "./componentes/RegistrarServicio";
import VerConductor from "./componentes/VerConductor";
import VerServicios from "./componentes/VerServicios";
import Login from "./componentes/Login";
import Index from "./componentes/Index";


function App() {
  return (
    <Router>
      <Barra />

      <Route path="/" exact component={Login} />
      <Route path="/index" exact component={Index} />
      <Route path="/RegistrarConductor" exact component={RegistrarConductor} />
      <Route path="/RegistrarServicio" exact component={RegistrarServicio} />
      <Route path="/conductor/listarConductores" exact component={VerConductor} />
      <Route path="/VerServicios" exact component={VerServicios} />

    </Router>
  );
}

export default App;
