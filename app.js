const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

/* Array */
const posts = [
  {
    titolo: "Titolo 1",
    contenuto: "Contenuto 1",
    immagine: "/img/ciambellone.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 2",
    contenuto: "Contenuto 2",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 3",
    contenuto: "Contenuto 3",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 4",
    contenuto: "Contenuto 4",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 5",
    contenuto: "Contenuto 5",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.send(`
    <h1>My Posts</h1>
    ${posts.map((post) => `<img src="${post.immagine}" width="300">`)}
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
