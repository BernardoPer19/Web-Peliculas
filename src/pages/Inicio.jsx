import Nav from "../sections/Nav";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import MainPeliculas from "../sections/MainPeliculas";
import MainSeries from "../sections/MainSeries";
import Planes from "../sections/Planes";
import RecomendadoPelis from "../sections/Recomendados";
import RecomendadosSeries from "../sections/RecomendadoSeries";
import SeriesNuevas from "../sections/SeriesNuevas";

function Inicio() {
  return (
    <>
      <main className="bg-zinc-900 min-h-[100vh]">
        <Header />
        <MainPeliculas />
        <RecomendadoPelis/>
        <MainSeries />
        <RecomendadosSeries/>
        <SeriesNuevas/>
        <Planes/>
        <Footer/>
      </main>
    </>
  );
}

export default Inicio;
