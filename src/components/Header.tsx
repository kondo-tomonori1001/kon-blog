import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-gray-800 flex justify-between items-center dark:text-white border-b-2 p-4">
      <div>
        <p>MyBlog</p>
      </div>
      <div className="flex items-center">
        <button
          className="text-white dark:text-gray-900 bg-gray-800 dark:bg-white p-2"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change Theme
        </button>
        <nav>
          <ul className="flex">
            <li className="px-2">nav1</li>
            <li className="px-2">nav2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
