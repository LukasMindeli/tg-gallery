import { Link } from "react-router-dom";
import centerGif from "../assets/center.gif";

const btnStyle = {
  width: 260,
  height: 54,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
};

export default function Menu() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", position: "relative" }}>
      {/* Верхняя кнопка */}
      <div
        style={{
          position: "fixed",
          top: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <button style={btnStyle}>Открыть галерею</button>
        </Link>
      </div>

      {/* GIF по центру */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          pointerEvents: "none", // чтобы не мешала нажимать кнопки
        }}
      >
        <img
          src={centerGif}
          alt="center"
          style={{
            width: 220,
            maxWidth: "70vw",
            height: "auto",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Нижняя кнопка */}
      <div
        style={{
          position: "fixed",
          bottom: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <button style={btnStyle}>Контакты</button>
        </Link>
      </div>
    </div>
  );
}