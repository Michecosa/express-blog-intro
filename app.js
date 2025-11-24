const express = require("express");
const app = express();
const port = 3000;

/* Array */
const posts = [
  {
    titolo: "Titolo 1",
    contenuto: "Contenuto 1",
    immagine: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 2",
    contenuto: "Contenuto 2",
    immagine: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 3",
    contenuto: "Contenuto 3",
    immagine: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 4",
    contenuto: "Contenuto 4",
    immagine: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    titolo: "Titolo 5",
    contenuto: "Contenuto 5",
    immagine: "https://picsum.photos/200",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
