import styles from "src/components/ProfCard/index.module.css";
import clsx from "clsx";


export const ProfCard = () => {
  return(
    <div className="bg-white dark:bg-gray-700 mx-8 xl:mx-0">
      <div className="relative">
        <img className={styles.profBg} src="/images/prof_bg.jpeg" alt="" />
        <img className={clsx(styles.logo)} src="/images/icon.webp" alt="" />
      </div>
      <div className="p-4">
        <p className="mb-4 text-center font-bold">KON BLOG</p>
        <p className="text-sm">
          <span>WEB制作会社に勤務するフロントエンドエンジニアのブログ</span><br />
          <span>仕事や学習で習得したことを分かりやすく発信中です。</span>
          <span>このブログはヘッドレスCMSを用いたJamstack構成で制作しています（Next.js + microCMS）</span>
        </p>
      </div>
    </div>
  )
}