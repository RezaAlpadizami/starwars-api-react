import { Card } from "antd";

const CardDetail = ({ title, content, customStyles = {} }) => {
  const cardStyles = {
    border: "1px solid #e8e8e8",
    padding: "8px",
    textAlign: "center",
    background: "#fcb831",
    color: "#27374D",
    fontWeight: "bold",
    ...customStyles,
  };

  return (
    <Card
      title={title}
      bordered={false}
      headStyle={{ textAlign: "center", color: "#526D82" }}
      bodyStyle={cardStyles}
    >
      {content}
    </Card>
  );
};

export default CardDetail;
