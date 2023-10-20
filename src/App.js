import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout/pagelayout.component";
import Home from "./pages/Home/home.component";
import { ConfigProvider } from "antd";
import PeopleDetail from "./pages/PeopleDetail/people-detail.component";
import Films from "./pages/Films/films.component";
import FilmDetail from "./pages/FilmDetail/film-detail.component";
import Species from "./pages/Species/species.component";
import SpeciesDetail from "./pages/SpeciesDetail/species-detail.component";
import Starships from "./pages/Starships/starships.component";
import StarshipDetail from "./pages/StarshipDetail/starship-detail.component";
import Vehicles from "./pages/Vehicles/vehicle.component";
import VehicleDetail from "./pages/VehicleDetail/vehicle-detail.component";

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
            <Route path="/films/:id" element={<FilmDetail />} />
          </Route>
          <Route path="/species" element={<PageLayout />}>
            <Route index element={<Species />} />
            <Route path="/species/:id" element={<SpeciesDetail />} />
          </Route>
          <Route path="/starships" element={<PageLayout />}>
            <Route index element={<Starships />} />
            <Route path="/starships/:id" element={<StarshipDetail />} />
          </Route>
          <Route path="/vehicles" element={<PageLayout />}>
            <Route index element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  );
};

export default App;
