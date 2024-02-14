import { GiHouse } from "react-icons/gi";
import { FaTree } from "react-icons/fa6";
import { FaPersonSkiing } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";
import { MdAddAPhoto } from "react-icons/md";

const SVGContent = () => {
  return (
    <div className="svg">
      <GiHouse />
      Camere confortabile
      <FaTree />
      Plimbări în natură
      <FaPersonSkiing />
      Piste de schi
      <IoFastFood />
      Mâncare delicioasă
      <FaMountainSun />
      Trasee montane
      <MdAddAPhoto />
      Fotografii unice
    </div>
  );
};

export default SVGContent;
