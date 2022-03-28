import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experience() {
  return (
    <>
      <Container>
        <SectionTitle title="05 anos" description="de Experiência" />

        <section>
          <ExperienciaItem
            year="2021"
            title="Dev Front-end"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <ExperienciaItem
            year="2021"
            title="Dev Front-end"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <ExperienciaItem
            year="2021"
            title="Dev Front-end"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <ExperienciaItem
            year="2021"
            title="Dev Front-end"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </section>
      </Container>
    </>
  );
}
export default Experience;
