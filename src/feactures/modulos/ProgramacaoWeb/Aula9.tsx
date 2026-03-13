import { useState } from "react";

const layers = [
  {
    id: "frontend",
    label: "Front-end",
    subtitle: "O que o usuário vê",
    color: "#FF6B9D",
    bg: "#FF6B9D",
    icon: "🖥️",
    description: "Tudo que existe no browser: layout, cores, botões, animações. É a camada visual e interativa.",
    techs: ["HTML", "CSS", "JavaScript", "React", "Vue", "TypeScript", "Tailwind"],
    responsibilities: [
      "Criar interfaces visuais",
      "Garantir responsividade",
      "Consumir APIs (back-end)",
      "Acessibilidade (a11y)",
      "Performance do browser",
    ],
    salary: "R$ 3.000 – 18.000",
    roles: ["UI Developer", "React Dev", "Designer Dev"],
  },
  {
    id: "backend",
    label: "Back-end",
    subtitle: "O que acontece nos bastidores",
    color: "#7C5CBF",
    bg: "#7C5CBF",
    icon: "⚙️",
    description: "O cérebro da aplicação: lógica de negócio, banco de dados, autenticação e APIs que o front consome.",
    techs: ["Node.js", "Python", "Java", "SQL", "REST API", "Docker", "Redis"],
    responsibilities: [
      "Criar e manter APIs",
      "Gerenciar banco de dados",
      "Autenticação e segurança",
      "Regras de negócio",
      "Performance do servidor",
    ],
    salary: "R$ 4.000 – 22.000",
    roles: ["API Dev", "DevOps", "Data Engineer"],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    subtitle: "Da interface ao servidor",
    color: "#00D4AA",
    bg: "#00D4AA",
    icon: "🔄",
    description: "Domina as duas camadas. Pode construir um produto completo sozinho, do botão ao banco de dados.",
    techs: ["Tudo do front", "Tudo do back", "CI/CD", "Cloud", "Infra", "Testes"],
    responsibilities: [
      "Desenvolver end-to-end",
      "Tomar decisões de arquitetura",
      "Fazer deploy completo",
      "Integrar sistemas",
      "Liderar projetos solo",
    ],
    salary: "R$ 5.000 – 25.000",
    roles: ["Full Stack Dev", "Tech Lead", "CTO de startup"],
  },
];

const requestFlow = [
  { layer: "frontend", label: "Usuário clica 'Comprar'", detail: "Evento JS dispara uma requisição" },
  { layer: "frontend", label: "fetch('/api/pedido')", detail: "HTTP POST enviado ao servidor" },
  { layer: "backend", label: "API recebe o pedido", detail: "Valida dados, verifica estoque" },
  { layer: "backend", label: "Acessa o banco", detail: "INSERT INTO pedidos..." },
  { layer: "backend", label: "Resposta JSON", detail: '{ "status": "ok", "id": 1234 }' },
  { layer: "frontend", label: "Mostra confirmação", detail: "UI atualiza: 'Pedido realizado!'" },
];

export default function Aula9() {
  const [activeLayer, setActiveLayer] = useState("frontend");
  const [flowStep, setFlowStep] = useState(-1);
  const [flowRunning, setFlowRunning] = useState(false);

  const selected = layers.find(l => l.id === activeLayer);

  const runFlow = () => {
    if (flowRunning) return;
    setFlowRunning(true);
    setFlowStep(-1);
    let i = 0;
    const iv = setInterval(() => {
      setFlowStep(i);
      i++;
      if (i >= requestFlow.length) {
        clearInterval(iv);
        setFlowRunning(false);
      }
    }, 700);
  };


  return (
    <div style={{
      minHeight: "100vh",
      background: "#06060E",
      color: "#E0E0E0",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div style={{
        padding: "40px 40px 28px",
        background: "linear-gradient(135deg, #0C0C1E 0%, #06060E 100%)",
        borderBottom: "1px solid #12122A",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: "-80px", right: "100px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,157,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-60px", right: "0px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
          <span style={{ background: "#FF6B9D22", border: "1px solid #FF6B9D44", color: "#FF6B9D", padding: "3px 10px", fontSize: "10px", letterSpacing: "3px", fontWeight: "700" }}>AULA 09</span>
          <span style={{ color: "#222", fontSize: "10px" }}>● WEB FUNDAMENTALS</span>
        </div>

        <h1 style={{
          fontSize: "clamp(26px, 5vw, 50px)", fontWeight: "800", margin: "0 0 8px",
          letterSpacing: "-2px", color: "#FFF",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <span style={{ color: "#FF6B9D" }}>Front</span>
          <span style={{ color: "#444" }}> · </span>
          <span style={{ color: "#7C5CBF" }}>Back</span>
          <span style={{ color: "#444" }}> · </span>
          <span style={{ color: "#00D4AA" }}>Full Stack</span>
        </h1>
        <p style={{ color: "#555", fontSize: "14px", margin: 0, maxWidth: "480px", lineHeight: "1.6" }}>
          As camadas do desenvolvimento e o papel de cada profissional.
        </p>
      </div>

      <div style={{ padding: "32px 40px" }}>

        {/* Stack visual */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#333", marginBottom: "20px" }}>
            ARQUITETURA EM CAMADAS
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "24px" }}>
            {layers.map(l => (
              <button
                key={l.id}
                onClick={() => setActiveLayer(l.id)}
                style={{
                  background: activeLayer === l.id ? l.color + "15" : "#0D0D1E",
                  border: "1px solid " + (activeLayer === l.id ? l.color + "66" : "#12122A"),
                  color: activeLayer === l.id ? l.color : "#444",
                  padding: "20px 12px", cursor: "pointer",
                  fontFamily: "inherit", transition: "all 0.25s",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                  transform: activeLayer === l.id ? "translateY(-3px)" : "none",
                }}
              >
                <span style={{ fontSize: "28px" }}>{l.icon}</span>
                <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.5px" }}>{l.label}</span>
                <span style={{ fontSize: "10px", opacity: 0.7 }}>{l.subtitle}</span>
              </button>
            ))}
          </div>

          {/* Selected layer detail */}
          {selected && (
            <div style={{
              display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "1px",
              background: "#12122A", animation: "popIn 0.2s ease",
            }}>
              {/* Col 1: Description + techs */}
              <div style={{ background: "#0A0A18", padding: "28px", borderLeft: "3px solid " + selected.color }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: selected.color, marginBottom: "10px" }}>
                  O QUE FAZ?
                </div>
                <p style={{ fontSize: "13px", color: "#AAA", lineHeight: "1.8", marginBottom: "20px" }}>
                  {selected.description}
                </p>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#333", marginBottom: "10px" }}>
                  TECNOLOGIAS
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {selected.techs.map(t => (
                    <span key={t} style={{
                      fontSize: "11px", padding: "4px 10px",
                      background: selected.color + "12",
                      border: "1px solid " + selected.color + "33",
                      color: selected.color,
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Col 2: Responsibilities */}
              <div style={{ background: "#0A0A18", padding: "28px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#333", marginBottom: "12px" }}>
                  RESPONSABILIDADES
                </div>
                {selected.responsibilities.map((r, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "10px", alignItems: "flex-start",
                    marginBottom: "10px", fontSize: "13px", color: "#AAA", lineHeight: "1.5",
                  }}>
                    <span style={{ color: selected.color, flexShrink: 0, marginTop: "1px" }}>▸</span>
                    {r}
                  </div>
                ))}
              </div>

              {/* Col 3: Career */}
              <div style={{ background: "#0A0A18", padding: "28px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#333", marginBottom: "12px" }}>
                  CARREIRA
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", color: "#555", marginBottom: "4px" }}>FAIXA SALARIAL (BR)</div>
                  <div style={{ fontSize: "18px", fontWeight: "800", color: selected.color, letterSpacing: "-0.5px" }}>
                    {selected.salary}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#555", marginBottom: "8px" }}>TÍTULOS COMUNS</div>
                  {selected.roles.map(r => (
                    <div key={r} style={{
                      fontSize: "12px", color: "#888",
                      padding: "6px 0", borderBottom: "1px solid #12122A",
                    }}>{r}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fluxo de uma compra */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#333" }}>
              COMO AS CAMADAS SE COMUNICAM
            </div>
            <button
              onClick={runFlow}
              disabled={flowRunning}
              style={{
                background: "#00D4AA15", border: "1px solid #00D4AA44",
                color: flowRunning ? "#333" : "#00D4AA", padding: "7px 16px",
                cursor: flowRunning ? "not-allowed" : "pointer",
                fontSize: "11px", letterSpacing: "2px", fontFamily: "inherit", transition: "all 0.2s",
              }}
            >
              {flowRunning ? "EXECUTANDO..." : "▶ SIMULAR COMPRA"}
            </button>
          </div>

          <div style={{ border: "1px solid #12122A", overflow: "hidden" }}>
            {/* Layer labels */}
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", background: "#0A0A18" }}>
              <div style={{ padding: "10px 14px", fontSize: "10px", color: "#333", borderRight: "1px solid #12122A" }}>CAMADA</div>
              <div style={{ padding: "10px 14px", fontSize: "10px", color: "#333" }}>EVENTO</div>
            </div>

            {requestFlow.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid", gridTemplateColumns: "80px 1fr",
                  borderTop: "1px solid #12122A",
                  background: flowStep >= i
                    ? (item.layer === "frontend" ? "#FF6B9D10" : "#7C5CBF10")
                    : "transparent",
                  transition: "background 0.3s",
                  opacity: flowStep >= 0 && flowStep < i ? 0.3 : 1,
                }}
              >
                <div style={{
                  padding: "14px",
                  borderRight: "1px solid #12122A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontSize: "9px", letterSpacing: "1px", fontWeight: "700", padding: "3px 6px",
    
                  }}>
                    {item.layer === "frontend" ? "FRONT" : "BACK"}
                  </span>
                </div>
                <div style={{ padding: "14px 18px" }}>
                  <div style={{ fontSize: "13px", color: flowStep >= i ? "#DDD" : "#666", fontWeight: "600", marginBottom: "2px" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "11px", color: "#444", fontFamily: "'Courier New', monospace" }}>
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
          {[
            { label: "💡 Analogia", text: "Front-end é a vitrine da loja. Back-end é o estoque e os funcionários. Full Stack é dono e faz tudo." },
            { label: "🎯 Por onde começar?", text: "A maioria começa pelo Front-end — feedback visual imediato e curva de aprendizado mais amigável." },
            { label: "🔗 API: a ponte", text: "A comunicação entre front e back acontece via API. O back expõe endpoints que o front consome com fetch()." },
          ].map(card => (
            <div key={card.label} style={{ border: "1px solid #12122A", background: "#0D0D1E", padding: "20px" }}>
              <div style={{ fontSize: "12px", fontWeight: "700", color: "#CCC", marginBottom: "8px" }}>{card.label}</div>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.7", margin: 0 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;800&display=swap');
        @keyframes popIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}