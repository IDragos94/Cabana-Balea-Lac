import "./FirstSection.css";

function FirstSection({ imageUrl, title, text }) {
  return (
    <div>
      <div className="first-section">
        <img
          src="https://d1di2lzuh97fh2.cloudfront.net/files/05/05x/05xhqc.png?ph=b3f82c55e1"
          alt="picture"
        ></img>
        <div className="text">
          <h1>Bun venit la munte</h1>
          <p>
            În mijlocul unuia dintre cele mai frumoase regiuni montane din
            Carpați, Cabana Bâlea Lac este situată lângă un lac glaciar. Fiind
            direct accesibilă din legendarul drum Transfăgărășan, la o
            altitudine de 2034 de metri deasupra nivelului mării, cabana oferă
            cazare conform standardelor internaționale. Toate camerele sunt
            dotate cu mobilier din lemn, dușuri, toalete și televizoare, oferind
            o priveliste uluitoare atat asupra lacului Bâlea, care are o
            suprafață de 4,6 ha, cât și peste lanțurile muntoase din jur.
          </p>
        </div>
      </div>
    </div>
  );
}
export default FirstSection;
