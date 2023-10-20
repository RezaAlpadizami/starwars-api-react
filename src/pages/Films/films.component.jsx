import { useState, useEffect, useCallback } from "react";
import InputSearch from "../../components/InputSearch/input-search.component";
import CardItem from "../../components/Card/card.component";
import { api } from "../../services/api";
import "./films.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";
import { Row } from "antd";
import { getUrlId } from "../../utils/get-url-id";

const Films = () => {
  const [data, setData] = useState(null);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const onSearch = useCallback((value) => {
    setInputSearch(value);
  }, []);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`films/`);

      const dataFilms = await response.data;

      setData(dataFilms);
      setFilms(dataFilms.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`films/?search=${inputSearch}`);

      const dataFilms = await response.data;

      setData(dataFilms);
      setFilms(dataFilms.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [inputSearch]);

  console.log("data films", data);

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
          Films - <span>Star Wars</span>
        </h1>
      </div>
      <div className="header-content">
        <div>
          <InputSearch placeholder={"Search People"} onSearch={onSearch} />
        </div>
      </div>
      <div>
        {isLoading ? (
          <LoadingCustom />
        ) : (
          <>
            {films.length > 0 ? (
              <div className="cards">
                {films.map((film) => (
                  <CardItem
                    type={"films"}
                    url={film.url}
                    id={getUrlId(film.url)}
                    key={film.name}
                    name={film.title}
                  />
                ))}
              </div>
            ) : (
              <Row justify={"center"} align={"middle"} className="text-empty">
                <h2>{"Film tidak ditemukan :("}</h2>
              </Row>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Films;
