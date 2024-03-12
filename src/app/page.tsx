import Image from "next/image";
import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import   './style.css'; // Utilisation de modules CSS pour une meilleure gestion des styles
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <PageContainer>
        {/* Section Bienvenue */}
        <section className="welcomeSection">
          <div className="imageContainer">
            {/* Image de fond avec le contenu superposé */}
            <div className="contentOverlay">
              <h2 className="welcomeTitle">Bienvenue chez The Little Friends !</h2>
              <p className="welcomeText">Nous sommes votre destination idéale pour le gardiennage, le toilettage et l&apos;entretien de l&apos;espace de vie de vos précieux compagnons à quatre pattes.</p>
            </div>
          </div>
        </section>

        {/* Section Notre Histoire */}
    <section className="section">
      <h2>Notre Histoire</h2>
      <div className="content">
        <p>Fondée par Sarah et Thomas, passionnés des animaux, The Little Friends est née de notre amour inconditionnel pour nos amis à fourrure. Après avoir constaté le besoin croissant de services de qualité pour les animaux de compagnie, nous avons décidé de créer une entreprise qui offre une gamme complète de soins et de services adaptés à leurs besoins spécifiques.</p>
        <div className="imageSection">
          <img src="/assets/images/logo.png" alt="" />
        </div>
        </div>
    </section>

    {/* Section Notre Mission */}
    <section className="sectionWhite">
      <h2>Notre Mission</h2>
      <div className="content">
        <div className="imageSection">
          <img src="/assets/images/service.png" alt="" />
        </div>
        <p>Notre mission est simple : offrir à vos petits amis une expérience de bien-être complète, dans un environnement sécurisé et chaleureux, tout en vous offrant la tranquillité d&apos;esprit. Nous croyons fermement que chaque animal mérite d&apos;être traité avec amour, respect et attention, et nous nous engageons à leur offrir les meilleurs soins possibles.</p>

        </div>
    </section>

    {/* Section Nos Services */}
    <section className="section">
      <h2>Nos Services</h2>
      <div className="content">
      <p>Nous proposons une gamme complète de services de gardiennage, de toilettage et d&apos;entretien d&apos;espace de vie, adaptés aux besoins individuels de chaque animal. De la promenade quotidienne au toilettage de luxe, nous sommes là pour répondre à tous les besoins de vos compagnons à quatre pattes, afin qu&apos;ils restent heureux, en bonne santé et bien soignés.</p>

        <div className="imageSection">
          <img src="/assets/images/mission.png" alt="" />
        </div>

        </div>
    </section>

    {/* Section Notre Équipe */}
    <section className="sectionWhite">
      <h2>Notre Équipe</h2>
        <div className="content">
        <div className="imageSection">
          <img src="/assets/images/team.png" alt="" />
        </div>
        <p>Composée de passionnés des animaux, notre équipe est formée pour offrir des soins attentionnés et de qualité à vos compagnons à quatre pattes. Chaque membre de notre équipe partage une même passion pour les animaux et s&apos;engage à fournir les meilleurs services possibles. Nous sommes fiers de notre équipe dévouée et professionnelle, qui met tout en œuvre pour garantir le bien-être de vos petits amis.</p>

        </div>
    </section>

    {/* Section Pourquoi Nous Choisir */}
    <section className="section">
      <h2>Pourquoi Nous Choisir ?</h2>
      <div className="content">
        <p>Chez The Little Friends, nous comprenons l&apos;importance de vos animaux pour vous. Nous nous engageons à offrir les meilleurs soins possibles, afin que vous puissiez partir l&apos;esprit tranquille. Avec notre équipe qualifiée, nos services de qualité et notre amour pour les animaux, nous sommes la meilleure choix pour prendre soin de vos précieux compagnons à quatre pattes.</p>

        <div className="imageSection">
          <img src="/assets/images/choisir.png" alt="nous choisir" />
        </div>

        </div>
    </section>


    {/* Section Rejoignez-nous */}
    <section className="joinUsSection">
      <div><a href="https://xnha0fa0q56.typeform.com/to/ritRhuGm">Laissez-nous prendre soin de vos petits amis !</a></div>
    </section>
      </PageContainer>
      <Footer />
    </main>
  );
}
