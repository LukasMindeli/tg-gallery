import { Link } from "react-router-dom";

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
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      {/* Верхняя кнопка — чуть ближе к центру */}
      <div
        style={{
          position: "fixed",
          top: 80, // было почти у края — теперь ниже
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <div style={btnStyle}>Открыть галерею</div>
        </Link>
      </div>

      {/* Нижняя кнопка — чуть выше, ближе к центру */}
      <div
        style={{
          position: "fixed",
          bottom: 80, // было почти у края — теперь выше
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <div style={btnStyle}>Контакты</div>
        </Link>
      </div>
    </div>
  );
}