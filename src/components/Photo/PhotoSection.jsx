import Figure from "react-bootstrap/Figure";

function PhotoSection() {
  return (
    <Figure>
      <Figure.Caption>
        <h2>Locuri disponibile pentru 68 de persoane </h2>
        <div className="house">
          <div className="house-1">
            <h3>Cabana I</h3>
            <p>Construita pe lac - 34 locuri:</p>
            <p>- 5 camere duble</p>
            <p>- 4 camere triple</p>
            <p>- 3 garsoniere</p>
          </div>
          <div className="house-2">
            <h3>Cabana II</h3>
            <p>Construita langa lac - 34 locuri</p>
            <p>- 13 camere duble</p>
            <p>- 2 garsoniere "4 locuri" </p>
            <p>- 1 camera cu 6 locuri</p>
          </div>
        </div>
      </Figure.Caption>
      <div className="house-3">
        <p>
          Toate camerele sunt echipate conform standardelor internaţionale, sunt
          dotate cu frigider, televizor, telefon. Mobilierul confecţionat din
          lemn natur in stil rustic subtil modernizat, lenjeria de calitate
          superioară. Toalete sunt mobilate cu lavoar, duş si WC, sunt
          funcţionale cu apă caldă permanent, uscător de păr.
        </p>
      </div>
      <Figure.Image
        width={300}
        height={200}
        alt="171x180"
        src="https://img.directbooking.ro/getimage.ashx?w=1024&h=663&file=a458b540-71c4-4b29-b20b-f0a875f02f52.jpg&_gl=1*38x4to*_gcl_au*MTczNDI0MDE5OS4xNzA3NzM3NjMy"
      />
      <Figure.Image
        width={300}
        height={200}
        alt="171x180"
        src="https://collections.kerengo.ro/i/f/1446442/panzio-balea-to-13.webp"
      />
      <Figure.Image
        width={300}
        height={200}
        alt="171x180"
        src="https://www.transfagarasan.info/wp-content/uploads/2016/07/camera-cabana-balea-lac.jpg"
      />
      <Figure.Image
        width={300}
        height={200}
        alt="171x180"
        src="https://www.turistinfo.ro/images/cazare/986301.jpg"
      />
      <Figure.Image
        width={300}
        height={200}
        alt="171x180"
        src="https://collections.kerengo.ro/i/f/1446431/panzio-balea-to-2.webp"
      />
    </Figure>
  );
}

export default PhotoSection;
