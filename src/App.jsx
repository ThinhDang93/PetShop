import { createBrowserHistory } from "History";
import { Route, Routes } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import HomeTemplate from "./Pages/Template/HomeTemplate";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
export const routelink = createBrowserHistory();

function App() {
  return (
    <>
      <HistoryRouter history={routelink}>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
