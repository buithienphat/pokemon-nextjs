import { RowsIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-20 flex justify-between items-center relative">
      <Link className="h-[50px] w-[50px] relative" href="/">
        <Image src="../assets/logo.svg" fill alt="logo" />
        {/* <img src="../assets/logo.svg" alt="Logo" /> */}
      </Link>
      <ul className="flex gap-5 absolute left-1/2 -translate-x-1/2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dasboard">Dasboard</Link>
        </li>
      </ul>
      <div>
        <RowsIcon />
      </div>
    </header>
  );
};

export default Header;
