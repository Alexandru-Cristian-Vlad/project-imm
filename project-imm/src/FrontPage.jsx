import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";

export function FrontPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container gap-4 d-flex flex-column justify-content-center align-items-center vh-100">
              <div>
                <h1 className="text-center">
                  Inventory and Manufacturing Management
                </h1>
              </div>
              <button className="btn btn-dark">
                <a
                  href="/dashboard"
                  className="text-decoration-none text-reset"
                >
                  Go to Dashboard
                </a>
              </button>
            </div>
          }
        />
        <Route path="/dashboard/*" element={<MainPage />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
