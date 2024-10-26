import styles from "./mock-card.module.css";
import { ResponsiveImage } from "@/app/components/responsive-image/responsive-image";
import { type FC } from "react";
import { type Image } from "@/app/types";

interface MockCardProps {
  images: Image[];
  sizes: string;
}

export const MockCard: FC<MockCardProps> = ({ images, sizes }) => {
  return (
    <div className={styles.card}>
      <ResponsiveImage
        images={images}
        sizes={sizes}
        caption="Nulla aliquet fermentum gravida."
      />
    </div>
  );
};
