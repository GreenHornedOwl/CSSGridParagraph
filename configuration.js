const siblings = n => [...n.parentElement.children].filter(c=>c.nodeType == 1 && c!=n);
var buttons= [...document.querySelectorAll("#configuration button")];
buttons.map(el=>{
  el.addEventListener("click", (e)=>{
    siblings(e.currentTarget).map(el=> el.classList.remove("active"));
    e.currentTarget.classList.add("active");
    document.querySelector(".paragraph-content").classList = "paragraph-content";
    document.querySelector(".paragraph-content").classList = `paragraph-content ${e.currentTarget.value}`;
  });
});