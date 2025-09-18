import { generate } from "critical";

generate({
  inline: true,
  base: "dist/",
  src: "index.html",
  target: "index.html",
})
  .then(() => {
    console.log("Critical CSS inlined!");
  })
  .catch((err) => {
    console.error(err);
  });
