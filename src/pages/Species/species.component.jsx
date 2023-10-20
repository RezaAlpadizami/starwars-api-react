import { useState, useEffect, useCallback } from "react";
import InputSearch from "../../components/InputSearch/input-search.component";
import CardItem from "../../components/Card/card.component";
import { api } from "../../services/api";
import "./species.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";
import { Row } from "antd";
import { getUrlId } from "../../utils/get-url-id";
import PaginationButton from "../../components/Pagination/pagination.component";

const Species = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const onSearch = useCallback((value) => {
    setInputSearch(value);
  }, []);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`species/?page=${page}`);

      const dataSpecies = await response.data;

      setData(dataSpecies);
      setSpecies(dataSpecies.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`species/?search=${inputSearch}`);

      const dataSpecies = await response.data;

      setData(dataSpecies);
      setSpecies(dataSpecies.results);
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
          Species - <span>Star Wars</span>
        </h1>
      </div>
      <div className="header-content">
        <div>
          <InputSearch placeholder={"Search Species"} onSearch={onSearch} />
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
            {species.length > 0 ? (
              <div className="cards">
                {species.map((data) => (
                  <CardItem
                    type={"species"}
                    url={data.url}
                    id={getUrlId(data.url)}
                    key={data.name}
                    name={data.name}
                  />
                ))}
              </div>
            ) : (
              <Row justify={"center"} align={"middle"} className="text-empty">
                <h2>{"Species tidak ditemukan :("}</h2>
              </Row>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Species;
