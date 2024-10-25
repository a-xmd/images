import styles from "./mock-card.module.css";
import { ResponsiveImage } from "@/app/components/responsive-image/responsive-image";

export const MockCard = () => {
  return (
    <div className={styles.card}>
      <ResponsiveImage />
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
        sollicitudin leo.
      </div>
    </div>
  );
};
