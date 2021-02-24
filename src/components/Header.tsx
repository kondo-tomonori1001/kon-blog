import Link from 'next/link';
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-gray-200 dark:bg-gray-800 flex justify-between items-center dark:text-white p-4">
      <div>
      <Link href="/">
        <p className="cursor-pointer">MyBlog</p>
      </Link>
      </div>
      <div className="flex items-center">
        <button
          className="text-white dark:text-gray-900 bg-gray-800 dark:bg-gray-100 p-2"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change Theme
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
