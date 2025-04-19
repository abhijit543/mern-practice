import { HashRouter, Routes, Route, Link } from "react-router-dom";

import { lazy, Suspense } from "react";
const Mybook = lazy(() => import("./book"));
const FileReadWrite = lazy(() => import("./message"));
const Myemail = lazy(() => import("./contact"));
const Mystudent = lazy(() => import("./assets/student"));
const ManageUser = lazy(() => import("./user"));

function App() {
  let loadmsg = (
    <h3 className="text-danger text-center mt-5">
      <i className="fa fa-spinner fa-spin"></i> <br /> Please Wait Loading...
    </h3>
  );
  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/book"> Manage Book </Link>
          </li>
          <li>
            <Link to="/message"> File Read Write </Link>
          </li>
          <li>
            <Link to="/sendemail"> Compose The Email </Link>
          </li>
          <li>
            <Link to="/user"> Manage </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          exact
          path="/user"
          element={
            <Suspense fallback={loadmsg}>
              <ManageUser />
            </Suspense>
          }
        />
        <Route
          exact
          path="/assets/student"
          element={
            <Suspense fallback={loadmsg}>
              <Mystudent />
            </Suspense>
          }
        />
        <Route
          exact
          path="/sendemail"
          element={
            <Suspense fallback={loadmsg}>
              <Myemail />
            </Suspense>
          }
        />
        <Route
          exact
          path="/book"
          element={
            <Suspense fallback={loadmsg}>
              <Mybook />
            </Suspense>
          }
        />
        <Route
          exact
          path="/message"
          element={
            <Suspense fallback={loadmsg}>
              <FileReadWrite />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
