import Link from "next/link";
import Image from "next/image";

import Logo from "./../public/pijar-mahir-logo.svg";

export const SiteLogo = () => {
  return (
    <Link href="/">
      <Image
        src={Logo}
        alt="Pijarmahir"
        width={80}
        height={49}
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
};
