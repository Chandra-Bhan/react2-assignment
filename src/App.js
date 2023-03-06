import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/FirstComponent';
import SecondComponent from './component/SecondComponent';
import ThirdComponent from './component/ThirdComponent';
import FourthComponent from './component/FourthComponent';
import './component/Components.module.css'





// ---------------------Important Note--------------------
// 'node_modules' folder is a heavy folder so befor run the code execute this code in your terminal.

// ->  npm install

// This command will install the node_modules folder.


// 			Thank You (Chandra Bhan Prajapati)




function App() {
  return (
    <div>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
    </div>
  );
}

export default App;
