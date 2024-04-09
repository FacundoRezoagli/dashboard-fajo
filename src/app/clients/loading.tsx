import { Skeleton, Stack } from "@mui/material";
import styles from "@/components/skeletons/skClients.module.css"

export default function TablaLoading() {
  return (
    <div className={styles.container}>
      <Skeleton variant="text" className={styles.title} />
      <Skeleton variant="rectangular" width={900} height={500} />
    </div>
  )
}