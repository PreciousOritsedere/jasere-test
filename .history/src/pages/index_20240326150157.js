import Image from "next/image";
import Shape from "../../public/Rectangle 1.svg"

export default function Home() {
  return (
    <main className="max-w-[500px] w-full mt-[50px] flex flex-col gap-4">
    
      <div className="parallelogram">
        <h3>Heading</h3>
        <p>Content</p>
      </div>

      <div className="bg-green-400 text-white px-4 py-2 rounded-md">text</div>
    </main>
  );
}
