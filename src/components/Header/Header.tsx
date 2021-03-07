import Link from 'next/link';
import { useTheme } from "next-themes";
import clsx from 'clsx';
import styles from 'src/components/Header/index.module.css';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-gray-700 flex justify-between items-center dark:text-white p-4">
      <div>
      <Link href="/">
        <p className="cursor-pointer">
          MY BLOG
        </p>
      </Link>
      </div>
      <div className="flex items-center">
        <button
          className={clsx(styles.toggle,'flex items-center relative w-12 h-6 rounded-full bg-gray-400')}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <span 
            className={clsx(styles.circle,theme === 'dark' && styles.isDark,'absolute w-5 h-5 rounded-full bg-white')}>
          </span>
        </button>
        <nav>
          <ul className="flex">
            {/* <li className="px-2">nav1</li>
            <li className="px-2">nav2</li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
