import { Card, Flex } from "antd";
import { getUrlId } from "../../utils/get-url-id";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardItem = ({ url, name, id, type }) => {
  return (
    <Link to={`/${type}/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={`${type}`}
            src={`https://starwars-visualguide.com/assets/img/${type}/${getUrlId(
              url
            )}.jpg`}
          />
        }
      >
        <Flex align="center" justify="center">
          <Meta title={name} />
        </Flex>
      </Card>
    </Link>
  );
};

export default CardItem;
