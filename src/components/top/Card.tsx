export const Card = (props) => {
  return(
    <div>
      <img src={props.src} alt=""/>
      <p>{props.title}</p>
    </div>
  )
} 