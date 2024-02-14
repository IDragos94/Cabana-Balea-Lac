import "./HousePhoto.css";

function HousePhoto({ imageUrl, title }) {
  return (
    <div className="HousePhoto">
      <div>
        <img
          src="https://miriphoto.files.wordpress.com/2010/07/balea-cabana.jpg"
          alt="Cabana Bâlea Lac"
        ></img>
      </div>
      <div className="HousePhoto-text">
        <h4>Bucurați-vă de aerul proaspăt și relaxați-vă în natură</h4>
        <h2>Cabana Bâlea Lac</h2>
      </div>
    </div>
  );
}

export default HousePhoto;
