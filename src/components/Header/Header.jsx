import "./Header.css";

function header({ title }) {
  return (
    <header className="header-text">
      <h1>Cabana Bâlea Lac</h1>
      <nav className="nav-list">
        <ul>Pagina de start</ul>
        <ul>Despre noi</ul>
        <ul>Pret</ul>
        <ul>Rezervari</ul>
      </nav>
    </header>
  );
}

export default header;
