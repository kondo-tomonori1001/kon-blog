import clsx from "clsx";
import styles from "src/components/top/Card/index.module.css";
import { FaClock } from "react-icons/fa";

export const Card = (props) => {
  return (
    <div
      className={clsx(
        styles.card,
        "flex flex-col bg-white dark:text-white dark:bg-gray-600 rounded-md overflow-hidden duration-300 hover:shadow-lg w-100 h-full"
      )}
    >
      <div className="relative">
        <figure className={styles.cardImage}>
          <img className="" src={props.src} alt="" />
        </figure>
      </div>
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center">
          <FaClock color="" className={"text-gray-400 inline-block mr-1"} />
          <p className="inline-block text-gray-400 text-sm">
            {new Date(props.date).toLocaleDateString()}
          </p>
        </div>
        <p className="text-lg mt-1">{props.title}</p>
        <p className="text-gray-400 text-sm mt-1 mb-2">{props.desc}</p>
        <ul className="flex mt-auto">
          {props.tag.map((el: string) => (
            <li className="inline text-white bg-yellow-600 dark:bg-blue-700 dark:text-white mr-3 dark:border-0 px-4 rounded-full">
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
