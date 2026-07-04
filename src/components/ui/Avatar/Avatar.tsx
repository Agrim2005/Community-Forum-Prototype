import type { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

const Avatar = ({ size = 48, ...props }: AvatarProps) => {
  return (
    <img
      {...props}
      width={size}
      height={size}
      className="rounded-full object-cover border border-gray-300"
    />
  );
};

export default Avatar;