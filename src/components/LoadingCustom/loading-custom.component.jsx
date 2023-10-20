import Lottie from "lottie-react";
import loading from "../../assets/lotties/spinner2.json";
import "./loading-custom.styles.scss";

const LoadingCustom = () => {
  return (
    <div className="loading">
      <Lottie autoPlay={true} loop={true} animationData={loading} width={100} />
    </div>
  );
};

export default LoadingCustom;
