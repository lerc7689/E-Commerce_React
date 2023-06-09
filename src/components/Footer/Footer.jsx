import "./Footer.css";
 
const Footer = () => {

    return(
    <>
      <div className="footer">
            <div className="footerIconsContainer">
              <div className="whatsappContainer">
                <a href="https://wa.me/8297213784?text=¡Estoy+interesado!"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
              <div className="igContainer">
                <a href="https://msng.link/o?@lerc7689=ig"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <p>Created by Luis E. Ramirez C. 2023®</p>
      </div>
    </>);
}

export default Footer;