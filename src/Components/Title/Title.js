import './Title.css';

function Title(props) {
  return (
    <h2 className="sec_tit">{props.children}</h2>
  );
}

export default Title;