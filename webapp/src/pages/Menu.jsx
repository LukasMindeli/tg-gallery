import { Link } from "react-router-dom";

const btnStyle = {
  width: "calc(100% - 32px)",
  maxWidth: 520,
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(0,0,0,0.5)", // чёрный 50%
  color: "white",
  fontSize: 16,
  fontWeight: 700,
};

export default function Menu() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Верхняя кнопка */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <button style={btnStyle}>Открыть галерею</button>
        </Link>
      </div>

      {/* Нижняя кнопка */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <button style={btnStyle}>Контакты</button>
        </Link>
      </div>
    </div>
  );
}