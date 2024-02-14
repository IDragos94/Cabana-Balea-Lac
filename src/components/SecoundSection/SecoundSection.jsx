import "./SecoundSection.css";

function SecoundSection({ imageUrl, title, text }) {
  return (
    <div>
      <div className="secound-section">
        <img
          src="https://d1di2lzuh97fh2.cloudfront.net/files/26/26y/450/26yyuq.png?ph=b3f82c55e1"
          alt="picture"
        ></img>
        <div className="text">
          <h1>Referințe</h1>
          <p>
            Pentru noi, pot spune că a fost o surpriză plăcută mai ales că nu
            aveam mari așteptări fiind totuși o cabană la munte (și cu multe
            recenzii negative). Am fost cazați la sfârșit de septembrie, în
            timpul săptămânii, într-o cameră de 5 paturi deoarece am fost cu
            părinții. Camera avea și un balcon care dădea spre lac și era dotată
            la baie cu diverse consumabile și alte kit-uri. Pe lângă clasicele
            prosoape albe (am fost la o pensiune titrată, în Păltiniș, care nu
            avea) au fost chiar și papuci de casă. Caloriferul cu termostat a
            funcționat în mod corespunzător. Frigiderul nu a putut fi folosit
            deoarece nu ajungea cablul până la priză, la fel și pentru singura
            veioza existenta. Micul dejun inclus a cuprins tot ce ai avea nevoie
            dimineața: atât preparate reci (diverse mezeluri și brânzeturi,
            zacuscă, legume, măsline, etc.) cât și calde (oua, crenvurști).
            Cafeaua se făcea la un aparat care măcina pe loc boabele. M-a
            surprins că era ceapă verde, ridichi de lună, iaurt. Dimineața
            priveliștea din balcon a fost și mai frumoasă deoarece se oglindea
            răsăritul soarelui din munte în lac.Dana Bratu
          </p>
        </div>
      </div>
    </div>
  );
}
export default SecoundSection;
