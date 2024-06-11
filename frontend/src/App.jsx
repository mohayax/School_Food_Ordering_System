import Layout from "./component/Layout"
import Element from "./routes/Element.jsx"
import { ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <Element />
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
          />
    </>
  )
}

export default App
