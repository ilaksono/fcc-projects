import useApplicationData1 from 'hooks/useApplicationData1';
import 'styles/Animations.scss';
function App() {

  const {
    weather,
    convertTemp,
    icon,
    cels
  } = useApplicationData1();
  const handleClick = () => {
    convertTemp();
  };
  return (
    <div className="App">
      {
        weather.tempK &&
        <>
          <div onClick={handleClick} style={{ cursor: 'pointer', border: '2px solid red' }}>
            {weather.tempK}
            {cels ? ' C': ' F'}
          </div>
          <div>
            {weather.main}
          </div>
          <div>
            {weather.description}
          </div>
          <div>
            {weather.country}
          </div>
          <div>
            {weather.city}
          </div>
          <div className='animate' >
            <i className={icon}></i>

          </div>

        </>
      }
    </div>
  );
}

export default App;
