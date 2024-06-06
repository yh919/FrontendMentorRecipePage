import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  sm:py-6">
      <div className="bg-white flex flex-col gap-6 sm:w-[550px]  rounded-lg p-3 sm:p-6">
        <div className="">
          <Image
            src="/images/image-omelette.jpeg"
            width={1320}
            height={600}
            alt="Recipe Image"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold font-young-serif text-3xl text-black">
            Simple Omelletee Recipe
          </h1>
          <p className="text-sm font-medium">
            An easy and quick dish, perfect for anymeal, The classic omelette
            combaines beaten eggs cooked perfection,optionally filled with your
            choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 font-outfit bg-[#7b284f]/10 px-3 py-3">
          <h1 className="font-bold font-outfit text-xl text-[#7b284f]">
            Prepation time
          </h1>
          <ol className="list-disc space-y-1.5 ml-8 text-[#5f574e]">
            <li>
              <span className="font-bold">Total:</span> Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold">Prepation:</span>5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking:</span> 5 minutes
            </li>
          </ol>
        </div>
        <div className="flex flex-col items-start gap-5 font-young-serif ">
          <h1 className="font-bold  text-3xl text-[#5f574e]">Ingredients</h1>
          <ol className="list-disc space-y-3 font-bold text-sm font-outfit ml-8 text-[#5f574e]">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese,diced vegetables,cooked meats,herbs
            </li>
          </ol>
        </div>
        <hr />
        <div className="flex flex-col items-start gap-5 font-young-serif ">
          <h1 className="font-bold  text-3xl text-[#7b284f]">Instructions</h1>
          <ol className="list-decimal  space-y-3  font-bold text-sm font-outfit ml-8 text-[#5f574e]">
            <li>
              <span className="font-extrabold">Beat the eggs: </span>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture
            </li>
            <li>
              <span className="font-extrabold">Heat the pan: </span>
              Place a non-stick frying pan over medium head and butter or oil.
            </li>
            <li>
              <span className="font-extrabold">Cook the omelette: </span>
              Once the buffer is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface
            </li>
            <li>
              <span className="font-extrabold">Add fillings(optional): </span>
              When the eggs begin to set at the edge but are still slightly
              runny in the middle,sprinkle your chosen fillings over one half of
              the omellette.
            </li>
            <li>
              <span className="font-extrabold">Fold and serve: </span>
              As the omelette continues to cook carefully lift one edge and fold
              it over the fillings. Let it cook for another minute, then slide
              it onto a plate.
            </li>
            <li>
              <span className="font-extrabold">Enjoy: </span>
              Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <hr />
        <div className="flex flex-col items-start gap-5  ">
          <h1 className="font-bold  text-3xl font-young-serif text-[#7b284f]">
            Nutrition
          </h1>
          <table class="table-auto font-outfit border-spacing-2 w-full">
            <tbody className="flex flex-col gap-6 justify-center">
              <tr className="border-b border-slate-500 flex justify-between px-12">
                <th className="text-gray-400 font-normal">Calories</th>
                <th className="text-[#7b284f] font-bold">277kcal</th>
              </tr>
              <tr className="border-b border-slate-500 flex justify-between px-12">
                <th className="text-gray-400 font-normal">Carbs</th>
                <th className="text-[#7b284f] font-bold">0g</th>
              </tr>
              <tr className="border-b border-slate-500 flex justify-between px-12">
                <th className="text-gray-400 font-normal">Protien</th>
                <th className="text-[#7b284f] font-bold">20g</th>
              </tr>
              <tr className=" flex justify-between px-12">
                <th className="text-gray-400 font-normal">Fat</th>
                <th className="text-[#7b284f] font-bold">22g</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
