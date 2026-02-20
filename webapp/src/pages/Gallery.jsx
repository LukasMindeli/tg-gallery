import { Link } from "react-router-dom";

const demoImages = [
  { id: 1, title: "Картина 1", url: "https://picsum.photos/seed/1/800/600" },
  { id: 2, title: "Картина 2", url: "https://picsum.photos/seed/2/800/600" },
  { id: 3, title: "Картина 3", url: "https://picsum.photos/seed/3/800/600" },
];

export default function Gallery() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1 style={{ margin: 0 }}>Галерея</h1>
        <Link to="/"><button>Назад</button></Link>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 12,
        }}
      >
        {demoImages.map((img) => (
          <div key={img.id} style={{ borderRadius: 12, overflow: "hidden" }}>
            <img
              src={img.url}
              alt={img.title}
              style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: 8 }}>
              <div style={{ fontWeight: 600 }}>{img.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}