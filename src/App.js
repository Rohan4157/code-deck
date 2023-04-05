import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Pages/Routes";
import ModalProvider from "./Context/ModalContext";
import PlaygroundProvider from "./Context/PlaygroundContext";
const Loader = () => {
  <div>Loading...</div>;
};
function App() {
  return (
    <Suspense fallback={Loader()}>
      {
        <PlaygroundProvider>
          <ModalProvider>
            <Router>
              <Routes>
                <>
                  {routes.map((route) => (
                    <Route path={route.path} element={route.component} />
                  ))}
                </>
              </Routes>
            </Router>
          </ModalProvider>
        </PlaygroundProvider>
      }
    </Suspense>
  );
}

export default App;
