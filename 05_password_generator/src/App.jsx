import { use, useState, useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('password')
  const [length, setLength] = useState(8)
  const [specialCharacter, setSpecialCharacter] = useState(false)
  const [number, setNumber] = useState(false)

  const generatePassword = useCallback(() => {
    let passwordChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (specialCharacter) {
      passwordChar += '!@#$%^&*()_+{}[];:<>?,./~`-='
    }
    if (number) {
      passwordChar += '0123456789'
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChar.length)
      generatedPassword += passwordChar[randomIndex]
    }
    setPassword(generatedPassword)
  }, [length, specialCharacter, number])

  
  useEffect(() => {
    generatePassword()    
  }, [length, specialCharacter, number])



  return (
    <>
      <div className="h-full w-full bg-gray-950 text-white flex items-center justify-center">
        <div className="flex flex-col w-8/12 text-center bg-gray-900 p-10 rounded-3xl">
          <h1 className="font-bold text-4xl mb-8"> Password Generator</h1>
          {/* input container */}
          <div className="input-container w-full bg-gray-700 rounded-3xl text-xl flex">
            <input 
              type="text"
              className='bg-white outline-none border-none p-3 px-5 w-full rounded-l-3xl text-black'
              placeholder={password}
              readOnly
              ></input>
            <button 
              onClick={() =>
                window.navigator.clipboard.writeText(password)
                .then(() => {
                  alert('Password copied to clipboard');
                })
              }
              className='bg-black p-3 px-5 rounded-r-3xl'
              >copy</button>

          </div>

          <div className="action-container flex py-6 gap-10">
            <div className="range-container flex flex-col gap-2 justify-center text-left">
              <label>Length: {length}</label>
              <input 
                type="range" 
                min={8} 
                max={16}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                />
            </div>

            <div className="character-container flex items-center gap-2">
              <input 
                type="checkbox" 
                id='SpecialCharacter'
                className='me-2'
                checked={specialCharacter}
                onChange={() => setSpecialCharacter(!specialCharacter)}
                />
              <label htmlFor='SpecialCharacter'>Special Character</label> 
            </div>

            <div className="number-container flex items-center gap-2">
              <input 
                type="checkbox" 
                id='Number'
                className='me-2'
                checked={number}
                onChange={() => setNumber(!number)}
                />
              <label htmlFor='Number'>Number</label> 
            </div>

          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
