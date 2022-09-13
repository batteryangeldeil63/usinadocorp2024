(function () {
    const select = document.querySelector("#select-academia");
    const linkredirect = document.querySelector("#linkredirect");
    select.addEventListener("change", () => {
        const unidade = select.value;
        linkredirect.value = `https://vendas.online.sistemapacto.com.br/planos?un=${unidade}&k=24f76f3d10e690809a26d615e4f929f4`;
    })
})();

