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
  width = 120,
  height = 140,
}: AvatarProps) {
  return (
    <div
      className="overflow-hidden rounded-3xl bg-card-soft"
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="size-full object-cover"
        priority
      />
    </div>
  );
}