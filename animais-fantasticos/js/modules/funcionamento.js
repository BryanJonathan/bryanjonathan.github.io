export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAtual = dataAgora.getDay();
  const horarioAtual = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diaAtual) !== -1;
  const horarioAberto =
    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
