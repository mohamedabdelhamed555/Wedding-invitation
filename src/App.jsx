import { useState, useEffect, useRef } from "react";
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/we2.jpeg'
import img3 from './assets/images/img2.jpg'
import img4 from './assets/images/we1.jpeg'
import img5 from './assets/images/img4.jpg'
import img6 from './assets/images/we3.jpeg'
import img7 from './assets/images/img6.jpg'
import img8 from './assets/images/we4.jpeg'
import img9 from './assets/images/img2.jpg'

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E8C96B";
const DARK = "#0f0a08";
const DARK2 = "#1a1108";

const placeholderImg = (w, h, label) =>
  `https://placehold.co/${w}x${h}/1a1108/C9A84C?text=${encodeURIComponent(label)}`;

const flowerSVG = (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="4" fill="#C9A84C" opacity="0.9" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <ellipse key={i} cx="30" cy="16" rx="4" ry="8" fill="#C9A84C" opacity="0.5"
        transform={`rotate(${deg} 30 30)`} />
    ))}
  </svg>
);

const divider = (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, margin: "16px 0" }}>
    <div style={{ flex: 1, height: "0.5px", background: `linear-gradient(90deg,transparent,${GOLD}55)` }} />
    {flowerSVG}
    <div style={{ flex: 1, height: "0.5px", background: `linear-gradient(90deg,${GOLD}55,transparent)` }} />
  </div>
);

function useCountdown(target) {
  const [t, setT] = useState({});
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) { setT({ done: true }); return; }
      setT({
        days: Math.floor(diff / 864e5),
        hours: Math.floor((diff % 864e5) / 36e5),
        minutes: Math.floor((diff % 36e5) / 6e4),
        seconds: Math.floor((diff % 6e4) / 1e3),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

// ─── Section: Hero / Invitation ───────────────────────────────────────────────
function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh", background: `radial-gradient(ellipse at 50% 30%, #2a1a0a 0%, ${DARK} 70%)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "60px 24px", textAlign: "center", position: "relative", overflow: "hidden"
    }}>
      {/* bg particles */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 2 + Math.random() * 3,
          height: 2 + Math.random() * 3,
          borderRadius: "50%",
          background: GOLD,
          opacity: 0.15 + Math.random() * 0.25,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`
        }} />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700&display=swap');
        @keyframes twinkle{0%,100%{opacity:0.15}50%{opacity:0.6}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
        *{font-family:'Tajawal',sans-serif;direction:rtl;}
        .amiri{font-family:'Amiri',serif !important;}
      `}</style>

      {/* corner ornaments */}
      {[["0", "0", "0", "0"], ["0", "auto", "0", "auto"], ["auto", "0", "auto", "0"], ["auto", "auto", "auto", "auto"]].map(([t, r, b, l], i) => (
        <div key={i} style={{ position: "absolute", top: t, right: r, bottom: b, left: l, width: 80, height: 80, opacity: 0.4 }}>
          <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
            <path d={i % 2 === 0 ? "M75 5 Q40 5 5 40 L5 75" : "M5 5 Q40 5 75 40 L75 75"}
              stroke={GOLD} strokeWidth="0.8" fill="none"
              transform={i >= 2 ? `scale(1,-1) translate(0,-80)` : undefined} />
            <circle cx={i % 2 === 0 ? 75 : 5} cy="5" r="3" fill={GOLD} opacity="0.8"
              transform={i >= 2 ? `scale(1,-1) translate(0,-80)` : undefined} />
          </svg>
        </div>
      ))}

      <div style={{ animation: "fadeUp 1s ease both" }}>
        <p className="amiri" style={{ color: `${GOLD}99`, fontSize: 18, letterSpacing: 3, marginBottom: 8 }}>
          بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
        </p>
        {divider}
        <p style={{ fontSize: 12, color: "#ffffff55", letterSpacing: 4, textTransform: "uppercase", marginBottom: 32 }}>
          دعوة زفاف
        </p>
      </div>

      <div style={{ animation: "fadeUp 1s 0.3s ease both", opacity: 0 }}>
        <h1 className="amiri" style={{
          fontSize: "clamp(52px,12vw,90px)", fontWeight: 700, lineHeight: 1.2,
          background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT},${GOLD})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "pulse 4s ease-in-out infinite"
        }}>
          Mohamed<br />
          <span style={{ fontSize: "0.5em", color: `${GOLD}88`, WebkitTextFillColor: `${GOLD}88` }}>❧ و ❧</span>
          <br />Manar
        </h1>
      </div>

      <div style={{ animation: "fadeUp 1s 0.6s ease both", opacity: 0, marginTop: 40 }}>
        {divider}
        <p style={{ color: "#ffffff66", fontSize: 15, marginTop: 8, letterSpacing: 1 }}>
          ٢٤ يونيو ٢٠٢٦  •  قاعة البرويفاج  •  الزقازيق
        </p>
      </div>
    </section>
  );
}

// ─── Section: Photos Gallery ───────────────────────────────────────────────────
function PhotosSection() {
  const photos = [
    { label: img9, w: 600, h: 800 },
    { label: img2, w: 600, h: 600 },
    { label: img3, w: 600, h: 800 },
    { label: img4, w: 600, h: 600 },
    { label: img5, w: 600, h: 800 },
    { label: img6, w: 600, h: 600 },
    { label: img7, w: 600, h: 600 },
    { label: img8, w: 600, h: 600 },
  ];
  return (
    <section style={{ background: DARK2, padding: "80px 24px" }}>
      <SectionTitle ar="معرض الصور" en="GALLERY" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: 10,
        maxWidth: 1200,
        margin: "40px auto 0"
      }}>
        {photos.map((p, i) => (
          <div key={i} style={{
            overflow: "hidden",
            height: "350px",
            background: "#111",
            borderRadius: "8px"
          }}>

            <img
              src={p.label}
              alt="gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                imageRendering: "auto",
                transition: "transform 0.5s",
                cursor: "pointer"
              }} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section: Countdown Timer ──────────────────────────────────────────────────
function TimerSection() {
  const t = useCountdown("2026-06-24T20:00:00");
  const units = [
    { val: t.days, label: "Day" },
    { val: t.hours, label: "Hours" },
    { val: t.minutes, label: "Minutes" },
    { val: t.seconds, label: "Seconds" },
  ];
  return (
    <section style={{
      background: `linear-gradient(180deg,${DARK} 0%,#1a0d05 100%)`,
      padding: "80px 24px", textAlign: "center"
    }}>
      <SectionTitle ar="العد التنازلي" en="COUNTDOWN" />
      {t.done ? (
        <p className="amiri" style={{ fontSize: 32, color: GOLD, marginTop: 40 }}>
          🎉 مبروك! اليوم هو يوم الفرح 🎉
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "row-reverse", gap: "clamp(12px,3vw,32px)", justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
          {units.map((u, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 80 }}>
              <div style={{
                background: "rgba(201,168,76,0.08)",
                border: `1px solid ${GOLD}33`,
                borderRadius: 4,
                padding: "20px 24px",
                marginBottom: 10,
                minWidth: 80,
              }}>
                <span className="amiri" style={{
                  fontSize: "clamp(40px,8vw,72px)", fontWeight: 700,
                  color: GOLD, display: "block", lineHeight: 1,
                  fontVariantNumeric: "tabular-nums"
                }}>
                  {t.done ? "00" : String(u.val ?? 0).padStart(2, "0")}
                </span>
              </div>
              <span style={{ fontSize: 13, color: "#ffffff55", letterSpacing: 2 }}>{u.label}</span>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: 40, opacity: 0.4 }}>
        {divider}
      </div>
    </section>
  );
}

// ─── Section: Couple Portrait ──────────────────────────────────────────────────
function PortraitSection() {
  return (
    <section style={{
      background: DARK2, padding: "80px 24px",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        maxWidth: 700, width: "100%",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center"
      }}>
        {/* text side */}
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 11, color: `${GOLD}77`, letterSpacing: 4, marginBottom: 12 }}>THE COUPLE</p>
          <h2 className="amiri" style={{
            fontSize: "clamp(36px,6vw,56px)",
            background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            lineHeight: 1.4, fontWeight: 700
          }}>
            Mohamed <br />Manar
          </h2>
          {divider}
          <p style={{ color: "#ffffffb4", fontSize: 14, lineHeight: 2, marginTop: 8 }}>
            يسعدنا تشريفكم<br />
            حفل زفافنا المبارك<br />
            <span style={{ color: "#e7b52e" ,fontSize:16}}>٢٤ يونيو ٢٠٢٦</span>
          </p>
        </div>
        {/* photo side */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", inset: -8,
            border: `1px solid ${GOLD}33`, borderRadius: 2,
            transform: "rotate(3deg)"
          }} />
          <div style={{
            position: "absolute", inset: -16,
            border: `1px solid ${GOLD}1a`, borderRadius: 2,
            transform: "rotate(-2deg)"
          }} />
          <img
            src={img1}
            alt="صورة الزوجين"
            style={{
              width: "100%", aspectRatio: "3/4", objectFit: "cover",
              borderRadius: 2, display: "block",
              filter: "sepia(10%) contrast(1.1)",
              border: `1px solid ${GOLD}22`
            }}
          />
          <div style={{
            position: "absolute", bottom: -1, left: -1, right: -1, height: 60,
            background: `linear-gradient(transparent,${DARK2})`, pointerEvents: "none"
          }} />
        </div>
      </div>
    </section>
  );
}

// ─── Section: Event Details ────────────────────────────────────────────────────
function DetailsSection() {
  const items = [
    { icon: "📅", label: "التاريخ", value: "الاربعاء ٢٤ يونيو ٢٠٢٦" },
    { icon: "🕗", label: "الموعد", value: "٨:٠٠ مساءً" },
    { icon: "🏛️", label: "القاعة", value: "قاعة البرويفاج" },
    { icon: "📍", label: "العنوان", value: "طريق الأحرار، الزقازيق" },
  ];
  return (
    <section style={{
      background: `radial-gradient(ellipse at 50% 100%,#2a1a0a,${DARK})`,
      padding: "80px 24px"
    }}>
      <SectionTitle ar="تفاصيل الحفل" en="EVENT DETAILS" />
      <div style={{ maxWidth: 600, margin: "48px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: "rgba(201,168,76,0.05)",
            border: `1px solid ${GOLD}22`,
            borderRadius: 4, padding: "24px 20px", textAlign: "center",
            transition: "border-color 0.3s", cursor: "default"
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}66`}
            onMouseLeave={e => e.currentTarget.style.borderColor = `${GOLD}22`}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
            <div style={{ fontSize: 11, color: `${GOLD}77`, letterSpacing: 2, marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontSize: 16, color: "#ffffffcc", fontWeight: 500 }}>{item.value}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 600, margin: "24px auto 0" }}>
        <div style={{
          background: "rgba(201,168,76,0.05)",
          border: `1px solid ${GOLD}22`,
          borderRadius: 4, padding: "24px", textAlign: "center"
        }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>🗺️</div>
          <div style={{ fontSize: 11, color: `${GOLD}77`, letterSpacing: 2, marginBottom: 8 }}>الموقع</div>
          <div style={{
            background: "#111", borderRadius: 2, height: 120,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#ffffff33", fontSize: 13
          }}>
            طريق الأحرار — الزقازيق، محافظة الشرقية
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: DARK, borderTop: `1px solid ${GOLD}22`,
      padding: "60px 24px 40px", textAlign: "center"
    }}>
      {divider}
      <h2 className="amiri" style={{
        fontSize: 36, fontWeight: 700,
        background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        marginTop: 24, marginBottom: 8
      }}>محمد ومنار</h2>
      <p style={{ color: `${GOLD}66`, fontSize: 13, letterSpacing: 2, marginBottom: 32 }}>٢٤ · ٦ · ٢٠٢٦</p>

      <p className="amiri" style={{
        color: "#ffffff44", fontSize: 15, lineHeight: 2, maxWidth: 400, margin: "0 auto 32px",
        fontStyle: "italic"
      }}>
        "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا"
      </p>

      {divider}

      <p style={{ color: "#ffffff22", fontSize: 11, marginTop: 24, letterSpacing: 2 }}>
        صُنع بالحب ❤ لمحمد ومنار
      </p>
    </footer>
  );
}

// ─── Helper: Section Title ──────────────────────────────────────────────────────
function SectionTitle({ ar, en }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: 10, color: `${GOLD}66`, letterSpacing: 5, marginBottom: 6 }}>{en}</p>
      <h2 className="amiri" style={{
        fontSize: "clamp(28px,5vw,42px)", fontWeight: 700,
        background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        marginBottom: 4
      }}>{ar}</h2>
      <div style={{ width: 60, height: "1px", background: `linear-gradient(90deg,transparent,${GOLD},transparent)`, margin: "8px auto 0" }} />
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: DARK, overflow: "hidden" }}>
      <HeroSection />
      <PortraitSection />
      <TimerSection />
      <PhotosSection />
      <DetailsSection />
      <Footer />
    </div>
  );
}
