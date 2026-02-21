import { Link } from "react-router-dom";

const btnStyle = {
  width: "calc(100vw - 32px)",
  maxWidth: 520,
  height: 52,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(0,0,0,0.5)", // чёрный 50%
  color: "white",
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: 0.2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",     // не переносить текст
  backdropFilter: "blur(6px)", // красиво на iOS/Android (где поддерживается)
};

export default function Menu() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      {/* TOP */}
      <div
        style={{
          position: "fixed",
          top: "max(16px, env(safe-area-inset-top))",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
          paddingTop: 0,
        }}
      >
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <div style={btnStyle}>Открыть галерею</div>
        </Link>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          position: "fixed",
          bottom: "max(16px, env(safe-area-inset-bottom))",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
          paddingBottom: 0,
        }}
      >
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <div style={btnStyle}>Контакты</div>
        </Link>
      </div>
    </div>
  );
}