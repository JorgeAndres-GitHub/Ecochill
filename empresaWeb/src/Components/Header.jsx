import '../css/Header.css';

export function Header() {
    
    const handleScrollToStart = () => {
        document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
      };
      
    const handleScrollToAbout = () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    const handleScrollToDetails = () => {
        document.getElementById('detalles').scrollIntoView({ behavior: 'smooth' });
      };
  
    const handleShowAlert = () => {
      Swal.fire({
        title: "Información del Grupo",
        html: `
          <strong>Grupo de Trabajo:</strong> <br>
          - Jorge Andrés Herrera Monsalve <a href="mailto:jorgherrera@utb.edu.co" target="_blank" rel="noopener noreferrer">jorgherrera@utb.edu.co</a> <br>
          - María Alejandra Flórez Grau <a href="mailto:maflorez@utb.edu.co" target="_blank" rel="noopener noreferrer">maflorez@utb.edu.co</a> <br>
          - Juan Camilo Barboza Martinez <a href="mailto:jubarboza@utb.edu.co" target="_blank" rel="noopener noreferrer">jubarboza@utb.edu.co</a> <br>
          - Jorge Florez - <a href="mailto:jubarboza@utb.edu.co" target="_blank" rel="noopener noreferrer">jorflorez@utb.edu.co</a><br>
        `,
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#28a745",
      });
    };
  
    return (
      <>
        <header className="header">
          <div className="logo">ECOCHILL</div>
          <nav className="nav">
            <ul>
              <button onClick={handleScrollToStart} className="header-button">Inicio</button>
              <button onClick={handleScrollToAbout} className="header-button">Acerca de</button>
              <button onClick={handleScrollToDetails} className="header-button">Servicios</button>
              <button onClick={handleShowAlert} className="header-button">Contacto</button>
            </ul>
          </nav>
        </header>
      </>
    );
  }