import { useState, useEffect, useCallback } from "react";

import { Col, Row, Flex } from "antd";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import CardDetail from "../../components/CardDetail/card-detail.component";
import "./film-detail.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";

const FilmDetail = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getDetailFilm = useCallback(async () => {
    try {
      const response = await api.get(`/films/${id}`);
      setData(response.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDetailFilm();
  }, [getDetailFilm]);

  return (
    <>
      {isLoading ? (
        <LoadingCustom />
      ) : (
        <Flex vertical justify="center" align="center" gap={"middle"}>
          <div className="wrapper">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
              alt={`${data?.name}`}
              width={250}
              height={300}
              style={{ borderRadius: 10 }}
            />
          </div>
          <Row gutter={[32, 32]} justify={"center"}>
            <Col span={6}>
              <CardDetail title={"Title"} content={data?.title} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Release Date"} content={data?.release_date} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Director"} content={`${data?.director} Cm`} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Producer"} content={`${data?.producer} Kg`} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Synopsis"} content={data?.opening_crawl} />
            </Col>
          </Row>
        </Flex>
      )}
    </>
  );
};

export default FilmDetail;
