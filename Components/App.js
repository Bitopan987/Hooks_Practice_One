import UseCallback from './UseCallback';
import UseMemoHook from './UseMemoHook';
import UseRefHook from './UseRefHook';
import ClassTimer from './ClassTimer';
import HookTimer from './HookTimer';
import CustomHook from './CustomHook';
import CustomHookOne from './CustomHookOne';
import CounterOne from './UseCustomHook';
import CounterTwo from './UseCustomHookOne';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
