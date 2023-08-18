import Image from "next/image";

interface BannerCardProps {
  url?: string;
  img: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ url, img }) => {
  return (
    <div className="overflow-hidden md:rounded-lg">
      <Image
        src={`/banners/${img}`}
        alt="Image"
        width={1110}
        height={300}
        className="h-auto w-full"
      />
    </div>
  );
};

export default BannerCard;
