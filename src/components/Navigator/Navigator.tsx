import Image from "next/image";
function NaviElem({ children }: { children: React.ReactNode }) {
  return <li className="text-center m-2">{children}</li>;
}

export default function Navigator() {
  const naviElem = ["History", "Feedback", "About Author"];

  return (
    <ul className="flex flex-col justify-center">
      <li className="flex flex-row justify-center items-center m-5 text-lg font-bold">
        <Image
          src="/star.svg"
          className="w-6 h-6"
          alt="logo"
          width={50}
          height={12}
        />
        Chat With Me
      </li>
      {naviElem.map((v) => (
        <NaviElem>{v}</NaviElem>
      ))}
    </ul>
  );
}
