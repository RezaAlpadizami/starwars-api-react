import { useState, useEffect, useCallback } from "react";

import { Col, Row, Flex } from "antd";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import CardDetail from "../../components/CardDetail/card-detail.component";
import "./species-detail.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";

const SpeciesDetail = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getSpeciesDetail = useCallback(async () => {
    try {
      const response = await api.get(`/species/${id}`);
      setData(response?.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getSpeciesDetail();
  }, [getSpeciesDetail]);

  return (
    <>
      {isLoading ? (
        <LoadingCustom />
      ) : (
        <Flex vertical justify="center" align="center" gap={"middle"}>
          <div className="wrapper">
            <img
              src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
              alt={`${data?.name}`}
              width={250}
              height={300}
              style={{ borderRadius: 10 }}
            />
          </div>
          <Row gutter={[32, 32]} justify={"center"}>
            <Col span={6}>
              <CardDetail title={"Name"} content={data?.name} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Classification"}
                content={data?.classification}
              />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Average Height"}
                content={`${data?.average_height} Cm`}
              />
            </Col>
            <Col span={6}>
              <CardDetail title={"Hair Color"} content={data?.hair_color} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Skin Color"} content={data?.skin_color} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Eye Color"} content={data?.eye_color} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Average Lifespan"}
                content={data?.average_lifespan}
              />
            </Col>
            <Col span={6}>
              <CardDetail title={"Language"} content={data?.language} />
            </Col>
          </Row>
        </Flex>
      )}
    </>
  );
};

export default SpeciesDetail;
