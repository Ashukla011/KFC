import { WithAction } from './AllPages/Navbar.jsx';
import { AllRouters } from './AllPages/AllRouters.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <WithAction />
      <AllRouters />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        toastClassName="!rounded-2xl !font-bold !text-sm"
      />
    </div>
  );
}

export default App;

