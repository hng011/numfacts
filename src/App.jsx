import { React,useState } from 'react'
import axios from 'axios';
import './assets/css/App.css'
import Text from './components/Text'
import Header from './components/Header'
import Input from './components/Input'

const App = () => {
  const default_text = "💤💤💤💤"
  const [load, setLoad] = useState("");
  const [inp, setInp] = useState(null);
  const [text, setText] = useState(default_text);

  const getInput = (val) => {
    setInp(val.target.value);
  };

  const errorMsg = () => {
    return (
      <div>
        <h1 className='text-lg'>internal server error</h1>
        <code className='text-2xl'>500</code>
      </div>
    );
  }

  const getAnswer = async () => {
      try {
        const res = await axios.request(`http://numbersapi.com/${inp}`);
        setText(res.data);
        setLoad("");
      } catch (err) {
        setText(errorMsg());
        setLoad("");
        console.log(err);
      }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(inp === null || inp === "") {
      console.log("is null");
      setLoad("");
      setText(default_text)
      alert("Please input the correct value and refresh");
    } else {
      setText("");
      setLoad("Loading...");
      getAnswer();
      console.log("not null");
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='flex justify-center flex-col text-center w-[70%]'>
        <div className='mt-[30vh] mb-[2%]'>
          <Header />
          <main className='mt-5'>
            <Input funcInp={getInput} funcHandleClick={handleClick} />
          </main>
          <div id='loading'>
            {load}
          </div>
          <Text text={text} />
        </div>  
      </div>
    </div>
  );
}

export default App;

