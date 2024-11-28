export default interface IQuestionario {
  codigoQuestionario: number | null;
  nomeQuestionario: string | null;
  codigoTipoQuestionario: number | null;
  codigoSituacao: number | null;
  inicioValidade: string | null;
  fimValidade: string | null;
  objetivo: string | null;
  ajuda: string | null;
  dataRegistro: string | null;
  nomeTipo: string | null;
  nomeSituacao: string | null;
  situacoes: Array<unknown> | null;
  grupos: Array<unknown> | null;
}
