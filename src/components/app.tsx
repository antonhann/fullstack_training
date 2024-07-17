import Header from './header';
import {useState} from 'react';


const App = () =>{
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }
    useEffect(() => {
        console.log('Component Mounted');
        return () => {
            console.log('Component Unmounted');
        }
    })
    return (
        <div className = "container">
            <Header message = "Naming Contest"/>

            <button onClick = {() => handleClick()}>{counter}</button>
        </div>
    )
}

export default App;

function useEffect(arg0: () => () => void) {
    throw new Error('Function not implemented.');
}
