import { useState, useEffect, useCallback } from "react";

import { Col, Row, Flex } from "antd";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import CardDetail from "../../components/CardDetail/card-detail.component";
import "./starship-detail.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";

const StarshipDetail = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getStarshipDetail = useCallback(async () => {
    try {
      const response = await api.get(`/starships/${id}`);
      setData(response?.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getStarshipDetail();
  }, [getStarshipDetail]);

  return (
    <>
      {isLoading ? (
        <LoadingCustom />
      ) : (
        <Flex vertical justify="center" align="center" gap={"middle"}>
          <div className="wrapper">
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
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
              <CardDetail title={"Model"} content={data?.model} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Manufacturer"}
                content={`${data?.manufacturer}`}
              />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Cost In Credits"}
                content={data?.cost_in_credits}
              />
            </Col>
            <Col span={6}>
              <CardDetail title={"Length"} content={data?.length} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Max Atmosphering Speed"}
                content={data?.max_atmosphering_speed}
              />
            </Col>
            <Col span={6}>
              <CardDetail title={"Crew"} content={data?.crew} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Passengers"} content={data?.passengers} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Cargo Capacity"}
                content={data?.cargo_capacity}
              />
            </Col>
            <Col span={6}>
              <CardDetail title={"Consumables"} content={data?.consumables} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Hyperdrive Rating"}
                content={data?.hyperdrive_rating}
              />
            </Col>
            <Col span={6}>
              <CardDetail title={"MGLT"} content={data?.MGLT} />
            </Col>
            <Col span={6}>
              <CardDetail
                title={"Starship Class"}
                content={data?.starship_class}
              />
            </Col>
          </Row>
        </Flex>
      )}
    </>
  );
};

export default StarshipDetail;
