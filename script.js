
document.addEventListener("DOMContentLoaded", function () {
  const vereadores = [{'nome': 'OTONIEL BARBOZA GARCEZ JUNIOR', 'valor': 9936.03, 'foto': 'otoniel.jpg'}, {'nome': 'LUCAS DA SILVA CADINI', 'valor': 9936.03, 'foto': 'lucas.jpg'}, {'nome': 'ZULMIR RINALDI', 'valor': 9936.03, 'foto': 'zulmir.jpg'}, {'nome': 'JUAREZ GREFF', 'valor': 6114.48, 'foto': 'juarez.jpg'}, {'nome': 'LEILA DE FATIMA CORREA', 'valor': 6114.48, 'foto': 'leila.jpg'}, {'nome': 'SERGIO LUIZ ARGENTE', 'valor': 6114.48, 'foto': 'sergio.jpg'}, {'nome': 'RAFAEL CABRAL FELISBERTO', 'valor': 3057.24, 'foto': 'rafael.jpg'}, {'nome': 'JANDIR KRUPINSKI', 'valor': 3057.24, 'foto': 'jandir.jpg'}, {'nome': 'JUSSARA SCARPARO DE OLIVEIRA', 'valor': 3057.24, 'foto': 'jussara.jpg'}, {'nome': 'NEI JOSÉ GASPARIN', 'valor': 3057.24, 'foto': 'nei.jpg'}, {'nome': 'STELA GABOARDI', 'valor': 3057.24, 'foto': 'stela.jpg'}];

  const galeria = document.getElementById("galeria");
  const ranking = document.getElementById("ranking");

  vereadores.forEach((v, i) => {
    const card = document.createElement("div");
    card.className = "vereador";
    card.innerHTML = `
      <img src="fotos/${v.foto}" alt="${v.nome}" onerror="this.src='fotos/placeholder.jpg'">
      <span>${v.nome}</span>
    `;
    galeria.appendChild(card);
  });

  vereadores
    .sort((a, b) => b.valor - a.valor)
    .forEach((v, i) => {
      const item = document.createElement("div");
      item.className = "ranking-item";
      item.innerHTML = `
        <strong>#${i + 1} ${v.nome}</strong><br>
        💰 R$ ${v.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
      `;
      ranking.appendChild(item);
    });
});
