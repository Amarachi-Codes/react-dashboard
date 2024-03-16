
import "./styles.css"

const MyBtn = (props: { name: string}) => {
  return (
    <div>
      <button className="MyButton">{props.name}</button>
    </div>
  )
}

export default MyBtn
