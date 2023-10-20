import { useState, useEffect, useCallback } from "react";
import InputSearch from "../../components/InputSearch/input-search.component";
import CardItem from "../../components/Card/card.component";
import { api } from "../../services/api";
import "./vehicle.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";
import { Row } from "antd";
import { getUrlId } from "../../utils/get-url-id";
import PaginationButton from "../../components/Pagination/pagination.component";

const Vehicles = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const onSearch = useCallback((value) => {
    setInputSearch(value);
  }, []);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`vehicles/?page=${page}`);

      const dataVehicles = await response.data;

      setData(dataVehicles);
      setVehicles(dataVehicles.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`vehicles/?search=${inputSearch}`);

      const dataVehicles = await response.data;

      setData(dataVehicles);
      setVehicles(dataVehicles.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [inputSearch]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  useEffect(() => {
    setIsLoading(true);
    getFilteredData();
  }, [getFilteredData]);

  return (
    <div>
      <div className="title">
        <h1>
          Vehicles - <span>Star Wars</span>
        </h1>
      </div>
      <div className="header-content">
        <div>
          <InputSearch placeholder={"Search Vehicles"} onSearch={onSearch} />
        </div>
        <div className="pagination">
          <PaginationButton page={page} setPage={setPage} data={data} />
        </div>
      </div>
      <div>
        {isLoading ? (
          <LoadingCustom />
        ) : (
          <>
            {vehicles.length > 0 ? (
              <div className="cards">
                {vehicles.map((data) => (
                  <CardItem
                    type={"vehicles"}
                    url={data.url}
                    id={getUrlId(data.url)}
                    key={data.name}
                    name={data.name}
                  />
                ))}
              </div>
            ) : (
              <Row justify={"center"} align={"middle"} className="text-empty">
                <h2>{"Starships tidak ditemukan :("}</h2>
              </Row>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Vehicles;
