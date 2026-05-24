import Image from "next/image";
import { MontserratAlternates } from "../../config/fonts";

export default function Home() {
  return (
   <div>
    <h1>Hola mundo</h1>
    <h1 className={MontserratAlternates.className}>Hola mundo</h1>
    </div>
  );
}
