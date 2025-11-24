const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

/* Array */
const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "Buonissimo",
    immagine: "/img/ciambellone.jpeg",
    tags: ["dolce", "colazione", "semplice"],
  },
  {
    titolo: "Cracker di Barbabietola",
    contenuto: "Ma cosa sto guardando",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["snack", "salato", "veloce"],
  },
  {
    titolo: "Pane Fritto Dolce",
    contenuto: "Da provare?",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["dolce", "merenda", "tradizione"],
  },
  {
    titolo: "Pasta alla Barbabietola",
    contenuto:
      "Sembra quel tipico piatto da ristorante a 5 stelle che lo provi e sa di legno",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["pasta", "vegetariano", "veloce"],
  },
  {
    titolo: "Torta Paesana",
    contenuto: "Immagini IA tipo:",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["dolce", "rustico", "tradizione"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.send(`
    <h1>My Posts</h1>
    ${posts
      .map(
        (post) => `
          <div>
            <h2>${post.titolo}</h2>
            <img src="${post.immagine}" width="300">
            <p>${post.contenuto}</p>
            <p>Tags: ${post.tags.join(", ")}</p>
          </div>
          <hr>
        `
      )
      .join("")}
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
