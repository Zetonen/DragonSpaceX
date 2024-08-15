import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 9998,
        }}
      ></div>
      <ThreeCircles
        visible={true}
        height="200"
        width="200"
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          background: "rgba(50, 50, 50, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
        wrapperClass
      />
    </>
  );
};
