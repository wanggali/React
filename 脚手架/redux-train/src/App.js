import './App.css';
import Count from "./container/Count";
import store from "./redux/store";
import Person from "./container/Person";

function App() {
    return (
        <div>
            {/*给容器组件传递store*/}
            {/*<Count store={store}/>*/}
            <Count/>
            <hr/>
            <Person/>
        </div>
    );
}

export default App;
