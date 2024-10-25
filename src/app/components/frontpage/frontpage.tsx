import styles from "./frontpage.module.css";
import { ResponsiveImage } from "@/app/components/responsive-image/responsive-image";
import { clsx } from "clsx";
import { MockCard } from "@/app/components/mock-card/mock-card";

export const Frontpage = () => {
  return (
    <div className={styles.frontpage}>
      <div className={styles.topStories}>
        <ResponsiveImage className={styles.topStory} />
        <ResponsiveImage
          className={clsx(styles.topStory, styles.conditional)}
        />
      </div>
      <div className={styles.grid}>
        {Array(16)
          .fill(null)
          .map((i, index) => (
            <MockCard key={`index-${index}`} />
          ))}
      </div>
    </div>
  );
};
