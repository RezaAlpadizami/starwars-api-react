import "./input-search.styles.scss";
import { Input } from "antd";

const { Search } = Input;

const InputSearch = ({ placeholder, onSearch = () => {} }) => {
  return (
    <Search
      className="input"
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton
    />
  );
};

export default InputSearch;
