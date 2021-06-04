import styles from "src/components/ProfCard/index.module.css";
import clsx from "clsx";


export const ProfCard = () => {
  return(
    <div className="bg-white dark:bg-gray-700 mx-8 xl:mx-0 flex xl:block">
      <div className="relative">
        <img className={styles.profBg} src="/images/prof_bg.png" alt="" />
        <img className={clsx(styles.logo, "hidden xl:block")} src="/images/icon.webp" alt="" />
      </div>
      <div className="p-4">
        <p className="mb-4 text-center">KON BLOG</p>
        <p>地方WEB制作会社のフロントエンドエンジニアです。</p>
        <p>主にWEB制作やVue.js、React、Wordpress（ブロックエディタ）について学んだことなどを発信します。</p>
      </div>
    </div>
  )
}