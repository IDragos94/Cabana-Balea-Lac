import Button from "react-bootstrap/Button";

function header({ title, Button }) {
  return (
    <>
      <header className="header-text">
        <h1>Cabana Bâlea Lac</h1>

        <nav className="nav-list">
          <ul href="https://balealac.ro/">
            <Button>Acasa</Button>
          </ul>
          <ul href="#About us">
            <Button>Despre noi</Button>
          </ul>
          <ul href="#Price">
            <Button>Pret</Button>
          </ul>
          <ul href="#Rezervation">
            <Button>Rezervari</Button>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default header;
