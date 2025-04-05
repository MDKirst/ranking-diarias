
# 📊 Ranking de Diárias - Câmara Municipal de Matelândia

Este projeto exibe um painel interativo com o **ranking dos vereadores que mais gastaram em diárias**, com base nos dados públicos da Câmara de Matelândia.

As informações são extraídas de uma planilha do Google Sheets conectada dinamicamente, e organizadas com imagens, nomes e valores atualizados.

---

## 🔎 Acesse o Painel Online

🌐 [Clique aqui para acessar o site](https://mdkirst.github.io/ranking-diarias/)

---

## 🧾 Fonte dos Dados

Os dados de diárias são mantidos em uma [planilha pública do Google Sheets](https://docs.google.com/spreadsheets/d/1xheRk8I4l3_fPQjO_ZdlXAmDUnZu-UlJDxhujiJHOLU/edit?usp=sharing), atualizada com os registros oficiais da Câmara Municipal.

A leitura da planilha é feita via API:
```
https://opensheet.vercel.app/1xheRk8I4l3_fPQjO_ZdlXAmDUnZu-UlJDxhujiJHOLU/vereadores
```

---

## 🛠️ Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript puro
- GitHub Pages para hospedagem
- Google Sheets + OpenSheet API para integração dinâmica
- VS Code com Live Server (modo local)

---

## 📂 Estrutura do Projeto

```
📁 ranking-diarias/
├── index.html         # Página principal
├── script.js          # Lógica JS (ranking e dados)
├── style.css          # Estilos visuais
└── fotos/             # Imagens dos vereadores
```

---

## 🧠 Autor

Projeto desenvolvido por **Maicon Kirsten**, professor e especialista em dados e transparência pública.

---

## ✅ Licença

Este projeto é de uso livre para fins educativos, jornalísticos e de incentivo à transparência nas administrações municipais.
