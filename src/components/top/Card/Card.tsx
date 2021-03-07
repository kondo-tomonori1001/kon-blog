import clsx from 'clsx';
import styles from 'src/components/top/Card/index.module.css';
import { FaClock } from 'react-icons/fa';

export const Card = (props) => {
  console.log(props);
  return(
    <div className={clsx(styles.card,"bg-white dark:text-white dark:bg-gray-600 rounded-md overflow-hidden duration-300 hover:shadow-lg mb-8")}>
      <div className="relative">
        <figure className={styles.cardImage}>
          <img className="" src={props.src} alt=""/>
        </figure>
      </div>
      <div className="p-4">
        <FaClock 
          color=""
          className={"text-gray-400 inline-block mr-1"}
        />
        <p className="inline-block text-gray-400 text-sm mt-1">{new Date(props.date).toLocaleDateString()}</p>
        <p className="text-lg mt-1">{props.title}</p>
        <p className="text-gray-400 text-sm mt-1 mb-2">{props.desc}</p>
        <ul className="flex">
          {props.tag.map((el:string) => (
            <li className="inline text-white bg-yellow-600 dark:bg-blue-700 dark:text-white mr-3 dark:border-0 px-4 py-1">{ el }</li>
          ))}
        </ul>
      </div>
    </div>
  )
} 
