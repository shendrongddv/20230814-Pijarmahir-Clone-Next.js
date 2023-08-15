import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/pijar-mahir-logo.svg";

const NavLogo = () => {
  return (
    <Link href="/">
      <Image
        src={Logo}
        alt="Pijarmahir"
        width={80}
        height={49}
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavLogo;
