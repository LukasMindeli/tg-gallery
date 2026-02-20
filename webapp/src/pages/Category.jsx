import { Link, useParams } from "react-router-dom";
import { categories, paintings } from "../data/galleryData";

export default function Category() {
  const { categoryId } = useParams();

  const category = categories.find((c) => c.id === categoryId);
  const list = paintings.filter((p) => p.categoryId === categoryId);

  if (!category) {
    return (
      <div style={{ padding: 16 }}>
        <h1>Категория не найдена</h1>
        <Link to="/gallery">
          <button>Назад к категориям</button>
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
        <h1 style={{ margin: 0 }}>{category.title}</h1>
        <Link to="/gallery">
          <button>Категории</button>
        </Link>
      </div>

      {list.length === 0 ? (
        <p style={{ marginTop: 16, opacity: 0.8 }}>
          Пока нет картин в этой категории.
        </p>
      ) : (
        <div
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 12,
          }}
        >
          {list.map((p) => (
            <div
              key={p.id}
              style={{
                borderRadius: 12,
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
                  height: 180,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: 10 }}>
                <div style={{ fontWeight: 800, lineHeight: 1.2 }}>
                  {p.title}
                </div>
                <div style={{ marginTop: 6, opacity: 0.8 }}>
                  {p.size}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}