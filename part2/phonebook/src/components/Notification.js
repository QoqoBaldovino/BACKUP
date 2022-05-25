import './Notification.css'

const Notification = ({notification}) => {

  const {state, message} = notification;

  if(state === null){
    return null;
  }

  return(
    <>
      {
        state ? 
        <h3 className="good">{message}</h3> :
        <h3 className="error">{message}</h3>
      }
    </>
  )
}

export default Notification