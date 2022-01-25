// Header Function
function bulidHeader() {
  const header = document.createElement("header");
  header.textContent = "Exercice 3";
  header.classList.add("header");
  return header;
}
// Description Function
function buildDescription() {
  const div = document.createElement("div");
  div.setAttribute("id", "description");

  const h2 = document.createElement("h2");
  h2.textContent = "Who we are";

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit!";

  div.appendChild(h2);
  div.appendChild(p);
  return div;
}
// Main Function
function buildMain() {
  const main = document.createElement("main");
  main.setAttribute("class", "main");
  main.appendChild(buildContent());
  main.appendChild(buildArticles());
  return main;
}
// Added content to main
function buildContent() {
  const div = document.createElement("div");
  div.setAttribute("class", "content");
  const p = document.createElement("p");
  p.textContent = "558x460";
  p.setAttribute("class", "text-content");
  div.appendChild(p);
  return div;
}
// Added Articles to main
function buildArticles() {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list-articles");

  let titels = ["Our Mission", "Our Vision", "Our Valuse"];
  let info =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, facere magnam dolor       incidunt sint corrupti quis possimus maiores quasi deleniti aliquam veritatis veniam eveniet. Et aliquid itaque recusandae mollitia laborum.";
  for (let i = 0; i < titels.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    let h3 = document.createElement("h3");
    //console.log(titels[i]);
    h3.textContent = titels[i];
    li.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = info;
    li.appendChild(p);
    ul.appendChild(li);
  }
  return ul;
}
// Footer Function
function buildFooter() {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");

  footer.textContent = "Copyright WEBSCHOOL";
  return footer;
}
// Build Page Application
function buildPage() {
  const body = document.querySelector("body");
  body.classList.add("body");

  body.appendChild(bulidHeader());
  body.appendChild(buildDescription());
  body.appendChild(buildMain());
  body.appendChild(buildFooter());
}
buildPage();
