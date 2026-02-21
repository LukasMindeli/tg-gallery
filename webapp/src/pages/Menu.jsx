import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <h1>Меню</h1>
      <p>Выбери раздел:</p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <Link to="/gallery">
          <button>Открыть галерею</button>
        </Link>

        <Link to="/contacts">
          <button>Контакты</button>
        </Link>
      </div>
    </div>
  );
}