import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";
import styles from "src/components/Header/index.module.css";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-gray-700 dark:text-white p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8">
        <div>
          <Link href="/">
            <p className="cursor-pointer text-lg font-bold">KON BLOG</p>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className={clsx(
              styles.toggle,
              "flex items-center relative w-12 h-6 rounded-full bg-gray-400"
            )}
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            <span
              className={clsx(
                styles.circle,
                theme === "dark" && styles.isDark,
                "absolute w-5 h-5 rounded-full bg-white"
              )}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};
