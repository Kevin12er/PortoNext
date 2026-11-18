import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Avatar({
  src,
  alt,
  width = 160,
  height = 200,
}: AvatarProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-card-soft shadow-sm"
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="size-full object-cover transition-transform duration-500 hover:scale-105"
        priority
      />
    </div>
  );
}