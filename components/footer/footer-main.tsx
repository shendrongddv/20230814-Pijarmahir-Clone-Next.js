import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/pijar-mahir-logo.svg";
import GooglePlay from "../../public/GooglePlay.svg";
import TelkomIndonesia from "../../public/telkom-indonesia.png";

import { IconType } from "react-icons";
import {
  BsWhatsapp,
  BsEnvelope,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

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

const socialLinks = [
  {
    id: 1,
    label: "Instagram",
    href: "/",
    icons: BsInstagram,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "/",
    icons: BsLinkedin,
  },
  {
    id: 3,
    label: "Facebook",
    href: "/",
    icons: BsFacebook,
  },
  {
    id: 4,
    label: "Twitter",
    href: "/",
    icons: BsTwitter,
  },
];

const FooterMain = () => {
  return (
    <footer className="border-t px-4 pt-16">
      <div className="container space-y-16">
        {/* # */}
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

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold opacity-50">
                Powered by
              </span>
              <Link href="/">
                <Image
                  src={TelkomIndonesia}
                  alt="Telkom Indonesia"
                  width={80}
                  height={54}
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            <ul className="space-y-4 pt-2">
              <li>
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex aspect-1 h-10 w-10 items-center justify-center rounded-full bg-accent-foreground text-xl leading-none text-white">
                    <BsWhatsapp />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold opacity-75">
                      WhatsApp
                    </span>
                    <span className="font-semibold">0812 8899 9576</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex aspect-1 h-10 w-10 items-center justify-center rounded-full bg-accent-foreground text-xl leading-none text-white">
                    <BsEnvelope />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold opacity-75">
                      Email
                    </span>
                    <span className="font-semibold">info@pijarmahir.id</span>
                  </div>
                </Link>
              </li>
            </ul>
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
            <ul className="flex gap-4">
              {socialLinks?.map((item) => (
                <li key={item.id}>
                  <SocialComponent
                    label={item.label}
                    href={item.href}
                    icons={item.icons}
                  />
                </li>
              ))}
            </ul>
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
        <div className="grid gap-8 md:grid-cols-2">
          {/* ## Col */}
          <div className="space-y-2">
            <div className="flex flex-col">
              <h4 className="font-bold opacity-75">
                Layanan Pengaduan Konsumen
              </h4>
              <h4 className="font-bold">
                Gedung Telkom Direktorat Business and Technology
              </h4>
            </div>
            <div className="opacity-75">
              Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Bar., Kec. Tebet,
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810
            </div>
          </div>

          {/* ## Col */}
          <div className="space-y-2">
            <div className="flex flex-col">
              <h4 className="font-bold opacity-75">Kontak Pelanggaran Usaha</h4>
              <h4 className="font-bold">
                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                Kementerian Perdagangan Republik Indonesia
              </h4>
            </div>
            <div className="flex items-center gap-3 opacity-75">
              <div>
                <BsWhatsapp />
              </div>
              0853 1111 1010
            </div>
          </div>
        </div>

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

// Social Components
interface SocialComponentProps {
  label: string;
  href: string;
  icons: IconType;
}
const SocialComponent: React.FC<SocialComponentProps> = ({
  label,
  href,
  icons: Icon,
}) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-2xl opacity-50 hover:opacity-100"
    >
      <Icon />
    </Link>
  );
};
