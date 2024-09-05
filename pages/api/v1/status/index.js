function status(req, res) {
  res.status(200).json({ chave: "alunos são acima da média" });
}

export default status;
