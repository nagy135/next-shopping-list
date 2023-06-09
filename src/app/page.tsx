import Slider from "./Slider";
import Adder from "./Adder";
import { getItems } from "@/db/item.repository";

export default async function Home() {
  const items = await getItems();
  return (
    <div className="container mx-auto">
      {items.map((e, i) => (
        <Slider
          key={`slider-${i}`}
          id={e.id}
          name={e.name}
          initialValue={e.value}
        />
      ))}
      <Adder />
    </div>
  );
}
