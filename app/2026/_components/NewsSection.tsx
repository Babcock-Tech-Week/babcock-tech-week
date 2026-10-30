"use client";

import Image from "next/image";
import Link from "next/link";
import { NEWS_ARTICLES } from "../_lib/newsData";

export default function NewsSection() {
  return (
    <section
      id="news-section"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)",
        backgroundSize: "32px 32px",
        padding: "80px 16px",
        color: "#000",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 4,
              height: 32,
              background: "#000",
              borderRadius: 2,
            }}
          />
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Incompleeta', sans-serif",
              margin: 0,
              color: "#000",
            }}
          >
            Show News
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
            gap: 32,
          }}
        >
          {NEWS_ARTICLES.slice(0, 2).map((article) => (
            <Link
              key={article.slug}
              href={`/2026/news/${article.slug}`}
              style={{
                display: "block",
                background: "#fff",
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="news-card"
            >
              {/* Card Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 260,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Card Content */}
              <div style={{ padding: "24px 24px 28px" }}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: 12,
                    color: "#111",
                    fontFamily: "'Google Sans', sans-serif",
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: "#999",
                    marginBottom: 14,
                    fontFamily: "'Google Sans', sans-serif",
                  }}
                >
                  {article.date}
                  {article.source && ` | ${article.source}`}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.65,
                    marginBottom: 20,
                    fontFamily: "'Google Sans', sans-serif",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {article.excerpt}
                </p>

                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 28px",
                    border: "2px solid #000",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#000",
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: "'Google Sans', sans-serif",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  className="read-more-btn"
                >
                  READ MORE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .news-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }
        .news-card:hover .read-more-btn {
          background: #000 !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}
