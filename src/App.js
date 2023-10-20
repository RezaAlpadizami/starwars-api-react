import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout/pagelayout.component";
import Home from "./pages/Home/home.component";
import { ConfigProvider } from "antd";
import PeopleDetail from "./pages/PeopleDetail/people-detail.component";
import Films from "./pages/Films/films.component";

const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
            Input: {
              colorPrimary: "#9DB2BF",
              algorithm: true,
            },
          },
        }}
      >
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/people/:id" element={<PageLayout />}>
            <Route index element={<PeopleDetail />} />
          </Route>
          <Route path="/films" element={<PageLayout />}>
            <Route index element={<Films />} />
            {/* <Route path="/films/:id" element={<FilmPage />} /> */}
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  );
};

export default App;
