// destrukturointi {props.handleClick, props.text} = { handleClick, text}
// same as we would do 'const {handleClick, text} = props'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
export default Button;
