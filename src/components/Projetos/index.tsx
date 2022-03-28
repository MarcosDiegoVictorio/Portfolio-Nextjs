import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjetoItem
          img="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
