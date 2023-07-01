import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Setting = lazy(() => import("./pages/Setting"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="bg-loading d-flex vh-100 justify-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
