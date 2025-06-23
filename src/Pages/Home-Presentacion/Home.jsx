import "./Home.css";
import imagenPresentacion from "../../assets/PresentacionImagen.png";
import Recetario from "../../assets/ProyectoRecetario.png";

import Card from "../../Components/Card/Card";

function Home_Presentacion() {
  const CurvedDivider = () => {
    return (
      <div className="caja_LineaDivisora">
        <svg
          className="LineaDivisora"
          viewBox="0 0 1440 79"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#28073E" // Cambia el color aquí
            d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <>
      <div className="Seccion_Presentacion">
        <div className="Presentacion_Container">
          <div className="Presentacion_Texto">
            <h1 className="Presentacion_Titulo">Bienvenido</h1>
            <p className="Texto">
              ¡Hola! me llamo Miguel Angel Palafox Espinoza,soy un estudiante de
              la facultad de informatica culiacan en la universidad autonoma de
              sinaloa(UAS), en esta pagina web visualizaras mi portafolio el
              cual contendra mis proyectos realizado durante toda mi formacion
              academica.
            </p>
          </div>

          <div className="Presentacion_Imagen">
            <img
              className="Imagen_Presentacion"
              src={imagenPresentacion}
              alt="Imagen de Presentación"
            />
          </div>
        </div>
      </div>

      <CurvedDivider />

      <div className="Seccion_Trabajos">
        <div className="Trabajos_Conteiner">
          <div className="Trabajos_Titulo_Conteiner">
            <div className="Titulo_Texto">
              <h1>Mis Proyectos</h1>
              <p>En esta seccion visualizaras los proyectos realizados, 
              con una breve descripcion de estas y las tecnologias que se utilizaron para desarrollarla</p>
            </div>
          </div>

          <div className="Proyectos_Conteiner">
            <div className="Proyectos">

              <Card imageUrl={Recetario} 
              title = "Mi Recetario.com" 
              description="En este proyecto se considero de manera sencilla y apresurada"/>

              <Card imageUrl={Recetario} 
              title = "Mi Recetario.com" 
              description="En este proyecto se considero de manera sencilla y apresurada"/>

              <Card imageUrl={Recetario} 
              title = "Mi Recetario.com" 
              description="En este proyecto se considero de manera sencilla y apresurada"/>

              <Card imageUrl={Recetario} 
              title = "Mi Recetario.com" 
              description="En este proyecto se considero de manera sencilla y apresurada"/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Presentacion;
