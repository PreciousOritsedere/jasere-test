import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[500px] w-full flex flex-col items-startgap-2">
      it didnt work, heres more descritption, the top of the div is slanting upwards, the right side slants downward towards the left and the bottom is straight and the left is straight. so it sort of wants to resemble a parallelogram

here is my code: <div className="bg-purple-400 text-white px-4 py-2 rounded-md slanted">
        <h3>Heading</h3>
        <p>Content</p>
      </div>
check the screenshot to visualize it better

      <div className="bg-green-400 text-white px-4 py-2 rounded-md">
text
      </div>
    </main>
  );
}
