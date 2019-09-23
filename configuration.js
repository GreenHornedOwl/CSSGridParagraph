var buttons= [...document.querySelectorAll("#configuration button")];
buttons.map(el=>{
  el.addEventListener("click", (e)=>{
    document.querySelector(".paragraph-content").classList = "paragraph-content";
    document.querySelector(".paragraph-content").classList = `paragraph-content ${e.currentTarget.value}`;
  });
});