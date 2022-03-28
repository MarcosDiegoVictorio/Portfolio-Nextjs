import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="conteiner">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
        />
      </main>
    </ProjetosContainer>
  );
}
