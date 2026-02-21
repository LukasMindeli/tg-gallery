import { Link } from "react-router-dom";

export default function Contacts() {
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
        <h1 style={{ margin: 0 }}>Контакты</h1>
        <Link to="/">
          <button>Назад</button>
        </Link>
      </div>

      <div
        style={{
          marginTop: 16,
          borderRadius: 14,
          padding: 16,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.06)",
          display: "grid",
          gap: 12,
        }}
      >
        <div>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Телефон</div>
          <a href="tel:+380677532837" style={{ fontSize: 18, fontWeight: 700 }}>
            +38 (000) 000-00-00
          </a>
        </div>

        <div>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Instagram</div>
          <a
            href="https://instagram.com/kiknavelidzeemzari"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 18, fontWeight: 700 }}
          >
            @your_username
          </a>
        </div>

        <div>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Email</div>
          <a
            href="mailto:you@example.com"
            style={{ fontSize: 18, fontWeight: 700 }}
          >
            you@example.com
          </a>
        </div>
      </div>
    </div>
  );
}