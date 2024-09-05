function Home() {
  return (
    <div
      style={{
        display: "flex",
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
          width: "300px",
          height: "auto",
          filter: "drop-shadow(0 0 20px rgba(0, 0, 255, 0.9)) drop-shadow(0 0 40px rgba(255, 0, 0, 0.3))",
        }}
      />
    </div>
  );
}

export default Home;

