/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoaRec.png';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá!</h1>
          <h2>Me chamo Diego</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Marcos Diego,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Vieira</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Ocupação atual</span>
            {'\u007B'}
            <div>
              Cargo: <span className="blue">Estudante,</span>
            </div>
            <div>
              Instituição: <span className="blue">Unicesumar</span>
            </div>
            <div>
              Curso:{' '}
              <span className="blue">Analise e desenvolvi. de sist.</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
