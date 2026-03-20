import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "../features/Auth/presentation/Screens/SignIn";
import MemoryGame from "../features/MemoryGame/presentation/screens/memoryGame";
import { Layout } from "../components/Layout";
import { PrivateRoute, PublicRoute } from "../utils/PrivateRoute";

export function RouterApp() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<SignIn />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/game" element={<MemoryGame />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Router;
