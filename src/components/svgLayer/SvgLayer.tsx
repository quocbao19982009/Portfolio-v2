import pattern1Svg from "@assets/pattern1.svg";
import pattern2Svg from "@assets/pattern2.svg";

const SvgLayer = () => {
  return (
    <>
      {" "}
      <img
        style={{
          //   height: "40%",
          position: "absolute",
          top: "96px",
          right: "0",
        }}
        src={pattern1Svg}
      />
      <img
        style={{
          height: "50%",
          position: "absolute",
          bottom: "-60px",
          left: "0",
        }}
        src={pattern2Svg}
      />
    </>
  );
};

export default SvgLayer;
