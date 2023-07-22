import { useEffect, useState } from 'react';
import Display from './components/Display';

function App() {
  const [borderColor, setBorderColor] = useState('');

  useEffect(() => {
    setBorderColor(localStorage.getItem('color') || '#854d0e');
  }, []);

  return (
    <div className="flex flex-col items-center bg-white font-digital7">
      <div className='border-4 border-[${borderColor}] rounded p-5 bg-[#ebece6]' style={{ borderColor: borderColor }}>
        <Display />
        <input type='color' className='mt-3 hover:cursor-pointer' onChange={(e) => {
          setBorderColor(e.target.value);
          localStorage.setItem('color', e.target.value);
        }
        } />
      </div>
    </div>
  );
}

export default App;
