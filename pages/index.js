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
