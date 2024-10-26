import styles from "./frontpage.module.css";
import { ResponsiveImage } from "@/app/components/responsive-image/responsive-image";
import { clsx } from "clsx";
import { MockCard } from "@/app/components/mock-card/mock-card";
import originalData from "./data.json" with { type: "json" };
import { Image } from "@/app/types";

const data = originalData as Image[][];

export const Frontpage = () => {
  const topStorySizes =
    "(min-width: 1408px) calc(1408px / 2 -  2rem), (min-width: 744px) calc(50vw - 2rem), calc(100vw - 2rem)";

  return (
    <div className={styles.frontpage}>
      <div className={styles.topStories}>
        <ResponsiveImage
          className={styles.topStory}
          images={data[0]}
          sizes={topStorySizes}
        />
        <ResponsiveImage
          className={clsx(styles.topStory, styles.conditional)}
          images={data[1]}
          sizes={topStorySizes}
        />
      </div>
      <div className={styles.grid}>
        {Array(12)
          .fill(null)
          .map((i, index) => (
            <MockCard
              key={`index-${index}`}
              sizes="(min-width: 1408px) calc((1408px - 2rem - 3rem) / 4), (min-width: 1266px) calc((100vw - 2rem -  3rem) / 4), (min-width: 744px) calc((100vw - 2rem - 2rem) / 3), (min-width: 374px) calc(50vw - 1rem - 0.5rem), calc(100vw - 2rem)"
              images={data[index + 2]}
            />
          ))}
      </div>
    </div>
  );
};
