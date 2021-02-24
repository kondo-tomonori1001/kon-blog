export const Card = (props) => {
  return(
    <div className="dark:text-white">
      <div className="relative">
        <img className="" src={props.src} alt=""/>
        <p className="absolute -top-2 right-2 bg-gray-200 dark:bg-gray-800 px-4">JavaScript</p>
      </div>

      <p className="text-gray-400 text-sm">{new Date(props.date).toLocaleDateString()}</p>
      <p>{props.title}</p>
    </div>
  )
} 