import { Routes, Route } from "react-router";
import { Suspense } from "react";

import RemoteProductApp from "./Pages/RemoteProductApp";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./NavBar";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <LandingPage />
          </div>
        }
      />
      <Route
        path="/products/*"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <div>
              <Navbar />
              <RemoteProductApp />
            </div>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
