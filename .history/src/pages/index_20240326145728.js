import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[500px] w-full mt-[50px] flex flex-col gap-4">
      <div className="parallelogram relative bg-purple-400 text-white px-4 py-2 rounded-md">
        <div className="content">
          <h3>Heading</h3>
          <p>Content</p>
        </div>
      </div>

      <div className="bg-green-400 text-white px-4 py-2 rounded-md">text</div>
    </main>
  );
}

