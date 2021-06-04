import styles from "src/components/ProfCard/index.module.css";

export const ProfCard = () => {
  return(
    <div className=" bg-white dark:bg-gray-700">
      <img className={styles.profBg} src="/images/prof_bg.png" alt="" />
      <img className={styles.logo} src="/images/icon.webp" alt="" />
      <div className="p-4">
        <p className="mb-4 text-center">KON BLOG</p>
        <p>テキストテキストテキストテキストテキスト</p>
      </div>
    </div>
  )
}