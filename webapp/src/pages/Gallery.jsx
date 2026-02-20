import { Link } from "react-router-dom";
import { categories } from "../data/galleryData";

export default function Gallery() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1 style={{ margin: 0 }}>Галерея</h1>
        <Link to="/"><button>Назад</button></Link>
      </div>

      <p style={{ marginTop: 10, opacity: 0.8 }}>Выбери категорию:</p>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/gallery/${cat.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                borderRadius: 14,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                minHeight: 90,
                display: "grid",
                alignContent: "center",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700 }}>{cat.title}</div>
              <div style={{ marginTop: 6, opacity: 0.75 }}>Открыть →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}