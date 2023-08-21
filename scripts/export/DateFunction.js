export default function Datee(){
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Lembre-se que os meses são indexados a partir de 0
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
}