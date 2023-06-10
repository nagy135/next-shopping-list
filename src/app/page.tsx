import Slider from "./Slider";

export default function Home() {
  return (
    <div className="container">
      <Slider name={"Eggs"} initialValue={50} />
      <Slider name={"Butter"} initialValue={50} />
    </div>
  );
}
