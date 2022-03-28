import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Projeto 01"
        type="Website"
        imgUrl="https://images.prismic.io/portfolioaula/be8779ed-c40f-bd73-e206567a687_nuprint1.png?auto=compress,format"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque
          voluptatibus aspernatur excepturi ipsum ipsam sint voluptates atque
          harum. Veniam ab illo ipsa. Magnam officia ex ipsum cumque vel dolores
          inventore blanditiis fugiat omnis tempora reprehenderit illo aut
          ratione, vero ducimus quis repellat, provident, iste exercitationem ut
          incidunt expedita porro animi voluptas. Dignissimos ducimus voluptatum
          sint perspiciatis enim, hic est dolor? Accusamus eos iusto dolorum
          incidunt maxime nostrum sapiente illo, in labore eveniet voluptates
          illum optio natus voluptatum, magni veniam.
        </p>
        <button type="button">
          <a href="#"> Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
