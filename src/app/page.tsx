import Slider from "./Slider";
import Adder from "./Adder";
import { getItems } from "@/db/item.repository";
import Deleter from "./Deleter";
import { beforeAfterTripplets } from "@/helpers/beforeAfterTripplets";

export default async function Home() {
  const items = await getItems();
  const items = beforeAfterTripplets(await getItems());
  return (
    <div className="container mx-auto">
      {items.map((e, i) => (
        <div key={`wrapper-${e.id}`} className="flex w-full mb-1">
          <Slider
            key={`slider-${i}`}
            id={e.id}
            name={e.name}
            initialValue={e.value}
          />
          <Deleter key={`deleter-${i}`} id={e.id} />
        </div>
      ))}
      <Adder />
    </div>
  );
}
