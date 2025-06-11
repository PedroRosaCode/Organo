import "./Formulario.css";
import CampoTexto from "../CampoTexto";
const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Precha os dados parar criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
        />
      </form>
    </section>
  );
};

export default Formulario;
