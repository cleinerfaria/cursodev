function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
        margin: "0",
        padding: "0",
      }}
    >
      <img
        src="/assets/images/logo/logo_white.png"
        alt="Logomarca Cleiner Faria"
        style={{
          width: "250px",
          height: "auto",
          filter:
            "drop-shadow(0 0 20px rgba(0, 0, 255, 0.9)) drop-shadow(0 0 40px rgba(255, 0, 0, 0.3))",
        }}
      />
      <span
        style={{
          color: "#fff", // Cor neon/tecnológica
          marginTop: "20px",
          fontSize: "14px", // Tamanho maior para modernizar
          fontFamily: "'Orbitron', sans-serif", // Fonte moderna e tecnológica
          letterSpacing: "2px", // Espaçamento entre letras para um efeito mais "futurista"
        }}
      >
        STAGING!!!
      </span>
    </div>
  );
}

export default Home;
