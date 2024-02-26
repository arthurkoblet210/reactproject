import Themeroutes from "./routes/Router";
import { useRoutes } from "react-router-dom";


const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

export default App; 