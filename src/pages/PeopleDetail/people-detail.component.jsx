import { useState, useEffect, useCallback } from "react";

import { Col, Row, Flex } from "antd";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import CardDetail from "../../components/CardDetail/card-detail.component";
import "./people-detail.styles.scss";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";

const PeopleDetail = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getPeopleDetail = useCallback(async () => {
    try {
      const response = await api.get(`/people/${id}`);
      setData(response.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPeopleDetail();
  }, [getPeopleDetail]);

  return (
    <>
      {isLoading ? (
        <LoadingCustom />
      ) : (
        <Flex vertical justify="center" align="center" gap={"middle"}>
          <div className="wrapper-people">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
              <CardDetail title={"Gender"} content={data?.gender} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Height"} content={`${data?.height} Cm`} />
            </Col>
            <Col span={6}>
              <CardDetail title={"Mass"} content={`${data?.mass} Kg`} />
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
              <CardDetail title={"Birth Year"} content={data?.birth_year} />
            </Col>
          </Row>
        </Flex>
      )}
    </>
  );
};

export default PeopleDetail;
