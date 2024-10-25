import { clsx } from "clsx";
import { type FC } from "react";
import styles from "./responsive-image.module.css";

interface ResponsiveImageProps {
  className?: string;
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({ className }) => {
  return (
    <div className={clsx(styles.responsiveImage, className)}>
      <picture>
        <source srcSet="img/photo.avif" type="image/avif" />
        <source srcSet="img/photo.webp" type="image/webp" />
        <img src="img/photo.jpg" alt="Description" width="768" height="576" />
      </picture>
    </div>
  );
};
