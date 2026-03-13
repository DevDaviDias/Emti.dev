import { useState } from "react";

const hostingTypes = [
  {
    id: "shared",
    icon: "🏢",
    name: "Hospedagem Compartilhada",
    subtitle: "Shared Hosting",
    color: "#FFD600",
    cost: "R$ 10–50/mês",
    ideal: "Blogs, sites pessoais",
    pros: ["Barato", "Fácil configuração", "Suporte incluído"],
    cons: ["Recursos limitados", "Lento sob tráfego", "Sem controle total"],
    analogy: "Morar num apartamento. Você divide a estrutura com outros moradores.",
  },
  {
    id: "vps",
    icon: "🏠",
    name: "VPS",
    subtitle: "Virtual Private Server",
    color: "#00E5FF",
    cost: "R$ 50–300/mês",
    ideal: "Apps, APIs, startups",
    pros: ["Recursos dedicados", "Controle total", "Escalável"],
    cons: ["Requer conhecimento", "Mais caro", "Você gerencia"],
    analogy: "Casa própria num condomínio. Espaço seu, mas infraestrutura compartilhada.",
  },
  {
    id: "dedicated",
    icon: "🏰",
    name: "Servidor Dedicado",
    subtitle: "Dedicated Server",
    color: "#B4FF39",
    cost: "R$ 500–5.000/mês",
    ideal: "Grandes empresas",
    pros: ["Máximo desempenho", "Total isolamento", "Customizável"],
    cons: ["Caro", "Exige equipe técnica", "Sem elasticidade"],
    analogy: "Fazenda inteira. Todo o terreno e estrutura são seus.",
  },
  {
    id: "cloud",
    icon: "☁️",
    name: "Nuvem",
    subtitle: "Cloud Hosting",
    color: "#FF6B35",
    cost: "Pague pelo uso",
    ideal: "SaaS, alto tráfego",
    pros: ["Auto-escala", "Alta disponibilidade", "Global"],
    cons: ["Custo pode crescer", "Complexidade", "Vendor lock-in"],
    analogy: "Elétrica da cidade. Você usa o quanto precisa e paga pelo consumo.",
  },
];

const cloudProviders = [
  { name: "AWS", full: "Amazon Web Services", color: "#FF9900", services: ["EC2", "S3", "Lambda", "RDS"] },
  { name: "GCP", full: "Google Cloud Platform", color: "#4285F4", services: ["Compute Engine", "Cloud Run", "BigQuery", "Firebase"] },
  { name: "Azure", full: "Microsoft Azure", color: "#0089D6", services: ["VMs", "App Service", "Functions", "CosmosDB"] },
  { name: "Vercel", full: "Vercel", color: "#FFFFFF", services: ["Next.js", "Edge Functions", "Analytics", "Deploy CD"] },
];

const requestJourney = [
  { step: "Você digita", detail: "exemplo.com.br", icon: "⌨️" },
  { step: "DNS lookup", detail: "Traduz domínio → IP", icon: "🔍" },
  { step: "Roteadores", detail: "Pacotes navegam pela internet", icon: "🌐" },
  { step: "Data Center", detail: "Físico, em algum lugar do mundo", icon: "🏭" },
  { step: "Servidor Web", detail: "Nginx / Apache recebe a req.", icon: "⚙️" },
  { step: "Sua página", detail: "HTML retorna ao browser", icon: "🖥️" },
];

export default function Aula8() {
  const [activeHosting, setActiveHosting] = useState("vps");
  const [showJourney, setShowJourney] = useState(false);
  const [journeyStep, setJourneyStep] = useState(-1);

  const selected = hostingTypes.find(h => h.id === activeHosting);

  const runJourney = () => {
    setShowJourney(true);
    setJourneyStep(-1);
    let i = 0;
    const iv = setInterval(() => {
      setJourneyStep(i);
      i++;
      if (i >= requestJourney.length) clearInterval(iv);
    }, 600);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080810",
      color: "#E0E0E0",
      fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      overflowX: "hidden",
    }}>
      {/* Header hero */}
      <div style={{
        padding: "40px 40px 32px",
        background: "linear-gradient(135deg, #0D0D20 0%, #080810 60%)",
        borderBottom: "1px solid #1A1A2E",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: "-60px", right: "-60px",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(180,255,57,0.05) 0%, transparent 70%)",
        }} />

        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
          <span style={{
            background: "#B4FF3922", border: "1px solid #B4FF3944",
            color: "#B4FF39", padding: "3px 10px", fontSize: "10px", letterSpacing: "3px", fontWeight: "700",
          }}>AULA 08</span>
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 52px)", fontWeight: "800",
          margin: "0 0 8px", letterSpacing: "-2px", color: "#FFF",
          fontFamily: "'Space Grotesk', sans-serif",
        }}>
          Hospedagem<br /><span style={{ color: "#B4FF39" }}>& Servidores</span>
        </h1>
        <p style={{ color: "#555", fontSize: "14px", margin: 0, maxWidth: "400px" }}>
          Onde os sites moram? O papel dos servidores e provedores de nuvem.
        </p>
      </div>

      <div style={{ padding: "32px 40px" }}>

        {/* Tipos de hospedagem */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#444", marginBottom: "20px" }}>
            TIPOS DE HOSPEDAGEM
          </div>

          {/* Selector */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "24px" }}>
            {hostingTypes.map(h => (
              <button
                key={h.id}
                onClick={() => setActiveHosting(h.id)}
                style={{
                  background: activeHosting === h.id ? h.color + "15" : "#0D0D1A",
                  border: "1px solid " + (activeHosting === h.id ? h.color + "66" : "#1A1A2E"),
                  color: activeHosting === h.id ? h.color : "#555",
                  padding: "16px 8px", cursor: "pointer", fontFamily: "inherit",
                  fontSize: "11px", letterSpacing: "1px", transition: "all 0.2s",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                }}
              >
                <span style={{ fontSize: "24px" }}>{h.icon}</span>
                <span>{h.subtitle.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Detail card */}
          {selected && (
            <div style={{
              border: "1px solid " + selected.color + "33",
              background: selected.color + "07",
              padding: "28px",
              animation: "slideIn 0.25s ease",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "10px", letterSpacing: "2px", color: selected.color, marginBottom: "8px" }}>ANALOGIA</div>
                  <p style={{ fontSize: "13px", color: "#AAA", lineHeight: "1.7", margin: 0, fontStyle: "italic" }}>
                    "{selected.analogy}"
                  </p>
                  <div style={{ marginTop: "16px" }}>
                    <span style={{ fontSize: "10px", color: "#555" }}>CUSTO ESTIMADO: </span>
                    <span style={{ fontSize: "13px", color: selected.color, fontWeight: "bold" }}>{selected.cost}</span>
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    <span style={{ fontSize: "10px", color: "#555" }}>IDEAL PARA: </span>
                    <span style={{ fontSize: "12px", color: "#AAA" }}>{selected.ideal}</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#B4FF39", marginBottom: "12px" }}>✅ VANTAGENS</div>
                  {selected.pros.map(p => (
                    <div key={p} style={{ fontSize: "13px", color: "#AAA", marginBottom: "6px" }}>▸ {p}</div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#FF6B35", marginBottom: "12px" }}>⚠️ LIMITAÇÕES</div>
                  {selected.cons.map(c => (
                    <div key={c} style={{ fontSize: "13px", color: "#AAA", marginBottom: "6px" }}>▸ {c}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Jornada da requisição */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#444" }}>
              JORNADA DE UMA REQUISIÇÃO
            </div>
            <button
              onClick={runJourney}
              style={{
                background: "#B4FF3915", border: "1px solid #B4FF3944",
                color: "#B4FF39", padding: "7px 16px", cursor: "pointer",
                fontSize: "11px", letterSpacing: "2px", fontFamily: "inherit",
              }}
            >
              ▶ ANIMAR
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", overflowX: "auto", gap: "0", paddingBottom: "8px" }}>
            {requestJourney.map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  padding: "16px 14px",
                  border: "1px solid " + (showJourney && journeyStep >= idx ? "#B4FF3966" : "#1A1A2E"),
                  background: showJourney && journeyStep >= idx ? "#B4FF3910" : "#0D0D1A",
                  transition: "all 0.4s ease",
                  minWidth: "100px", textAlign: "center",
                }}>
                  <div style={{ fontSize: "22px", marginBottom: "6px" }}>{item.icon}</div>
                  <div style={{ fontSize: "11px", fontWeight: "bold", color: showJourney && journeyStep >= idx ? "#B4FF39" : "#555", marginBottom: "4px" }}>
                    {item.step}
                  </div>
                  <div style={{ fontSize: "10px", color: "#444" }}>{item.detail}</div>
                </div>
                {idx < requestJourney.length - 1 && (
                  <div style={{
                    width: "24px", height: "2px", flexShrink: 0,
                    background: showJourney && journeyStep > idx ? "#B4FF39" : "#1A1A2E",
                    transition: "all 0.4s ease",
                    position: "relative",
                  }}>
                    <div style={{
                      position: "absolute", right: "-3px", top: "-4px",
                      color: showJourney && journeyStep > idx ? "#B4FF39" : "#1A1A2E",
                      fontSize: "10px", transition: "all 0.4s",
                    }}>▶</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cloud providers */}
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#444", marginBottom: "20px" }}>
            GRANDES PROVEDORES DE NUVEM
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {cloudProviders.map(p => (
              <div key={p.name} style={{
                border: "1px solid #1A1A2E", background: "#0D0D1A",
                padding: "20px", transition: "border-color 0.2s",
              }}>
                <div style={{ fontSize: "18px", fontWeight: "900", color: p.color, marginBottom: "4px", letterSpacing: "-1px" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: "11px", color: "#444", marginBottom: "16px" }}>{p.full}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.services.map(s => (
                    <span key={s} style={{
                      fontSize: "10px", padding: "3px 8px",
                      border: "1px solid " + p.color + "33",
                      color: p.color, background: p.color + "08",
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;800&display=swap');
        @keyframes slideIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}