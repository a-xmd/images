import { clsx } from "clsx";
import { type FC } from "react";
import styles from "./responsive-image.module.css";
import { type Image } from "@/app/types";

interface ResponsiveImageProps {
  className?: string;
}

interface ResponsiveImageProps {
  images: Image[];
  sizes: string;
  alt?: string;
}

const composeSourceSets = (images: Image[], type: "avif" | "jpg") => {
  return images.map((image) => `${image.url[type]} ${image.width}w`).join(", ");
};

export const ResponsiveImage: FC<ResponsiveImageProps> = ({
  className,
  images,
  sizes,
  alt = "",
}) => {
  return (
    <div className={clsx(styles.responsiveImage, className)}>
      <picture>
        <source
          srcSet={composeSourceSets(images, "avif")}
          sizes={sizes}
          type="image/avif"
        />

        <img
          srcSet={composeSourceSets(images, "jpg")}
          sizes={sizes}
          src={images[8].url.jpg}
          alt={alt}
          width={images[8].width}
          height={images[8].height}
        />
      </picture>
    </div>
  );
};
