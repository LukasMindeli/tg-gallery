import { Link, useParams } from "react-router-dom";
import { paintings } from "../data/galleryData";

export default function Painting() {
  const { paintingId } = useParams();
  const p = paintings.find((x) => x.id === paintingId);

  if (!p) {
    return (
      <div style={{ padding: 16 }}>
        <h1>Картина не найдена</h1>
        <Link to="/gallery">
          <button>Назад</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <h1 style={{ margin: 0 }}>{p.title}</h1>

        {/* Назад в категорию, откуда эта картина */}
        <Link to={`/gallery/${p.categoryId}`}>
          <button>Назад</button>
        </Link>
      </div>

      <div style={{ marginTop: 10, opacity: 0.85 }}>{p.size}</div>

      <div
        style={{
          marginTop: 16,
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <img
          src={p.imageUrl}
          alt={p.title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}