import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/pijar-mahir-logo.svg";
import GooglePlay from "../../public/GooglePlay.svg";

// Content
const footerLinks = [
  {
    id: 1,
    title: "Produk",
    links: [
      { id: 1, label: "Tentang Pijar Mahir", href: "/" },
      { id: 2, label: "Pijar Camp", href: "/" },
      { id: 3, label: "Bermitra dengan Pijar Mahir", href: "/" },
    ],
  },
  {
    id: 2,
    title: "Support",
    links: [
      { id: 1, label: "Bantuan", href: "/" },
      { id: 2, label: "Hubungi Kami", href: "/" },
    ],
  },
  {
    id: 3,
    title: "Blog",
    links: [
      { id: 1, label: "Berita", href: "/" },
      { id: 2, label: "Program & Promo", href: "/" },
    ],
  },
];

const FooterMain = () => {
  return (
    <footer className="border-t px-4 pt-16">
      <div className="container space-y-16">
        <div className="grid max-md:gap-8 md:grid-cols-5 md:divide-x">
          {/* Col */}
          <div className="space-y-3 md:pl-6 md:pr-6 md:first:pl-0 md:last:pr-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="Pijarmahir"
                width={128}
                height={77}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {footerLinks?.map((item) => (
            // Col
            <div
              key={item.id}
              className="space-y-3 md:pl-6 md:pr-6 md:first:pl-0 md:last:pr-0"
            >
              <h4 className="font-bold">{item.title}</h4>
              <ul className="space-y-2">
                {item.links?.map((subitem) => (
                  <li key={subitem.id}>
                    <Link href={subitem.href} className="hover:underline">
                      {subitem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col */}
          <div className="space-y-3 md:pl-6 md:pr-6 md:first:pl-0 md:last:pr-0">
            <h4 className="font-bold">Ikuti kami di:</h4>
            <div>Social Media</div>
            <h4 className="pt-3 font-bold">Download sekarang</h4>
            <div>
              <Link href="/">
                <Image
                  src={GooglePlay}
                  alt="Download di Google Playstore"
                  width={144}
                  height={43}
                  className="h-11 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* # */}

        {/* # */}
        <div className="flex flex-col gap-4 border-t py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <Link href="/" className="text-sm opacity-80 hover:underline">
              Kebijakan Privasi
            </Link>
            <Link href="/" className="text-sm opacity-80 hover:underline">
              Syarat dan Ketentuan
            </Link>
          </div>
          <span className="text-sm opacity-80">
            ©2020-2023 Pijar Mahir. All Right Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
