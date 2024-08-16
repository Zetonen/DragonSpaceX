import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <section
      style={{ padding: "200px", fontSize: "48px", textAlign: "center" }}
    >
      <h1
        style={{
          marginBottom: "32px",
          fontSize: "64px",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        Page not found
      </h1>
      <p>
        You will be automatically redirected to the main page in {count}{" "}
        seconds.
      </p>
    </section>
  );
};
