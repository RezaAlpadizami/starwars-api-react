import { useState, useEffect, useCallback } from "react";
import InputSearch from "../../components/InputSearch/input-search.component";
import PaginationButton from "../../components/Pagination/pagination.component";
import CardItem from "../../components/Card/card.component";
import { api } from "../../services/api";
import "./home.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";
import { Row } from "antd";
import { getUrlId } from "../../utils/get-url-id";

const Home = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [peoples, setPeoples] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const onSearch = useCallback((value) => {
    setInputSearch(value);
  }, []);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(`people/?page=${page}`);

      const dataPeople = await response.data;

      setData(dataPeople);
      setPeoples(dataPeople.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const getFilteredData = useCallback(async () => {
    try {
      const response = await api.get(`people/?search=${inputSearch}`);

      const returnedData = await response.data;

      setData(returnedData);
      setPeoples(returnedData.results);
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
          People - <span>Star Wars</span>
        </h1>
      </div>
      <div className="header-content">
        <div>
          <InputSearch placeholder={"Search People"} onSearch={onSearch} />
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
            {peoples.length === 0 ? (
              <Row justify={"center"} align={"middle"} className="text-empty">
                <h2>{"Data tidak ditemukan :("}</h2>
              </Row>
            ) : (
              <div className="cards">
                {peoples.map((people) => (
                  <CardItem
                    type={"characters"}
                    url={people.url}
                    id={getUrlId(people.url)}
                    key={people.name}
                    name={people.name}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
