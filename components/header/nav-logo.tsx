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
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
};

export default NavLogo;
