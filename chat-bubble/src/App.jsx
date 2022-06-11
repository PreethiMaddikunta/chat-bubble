import { useState, useCallback } from 'react'
import './App.css'
import Chat from './chat'
import Bubble from './bubble'
import BubbleInput from './bubble-input'
import useMessages from './use-messages'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [messages,addMessage] = useMessages([])
  const [newMessage, SetnewMessage] = useState('')
  const [display, SetDisplay] = useState('Chat Bubble')

  const handleSubmit = useCallback(() => {
    if(newMessage.length > 0){
      addMessage(newMessage)
      SetnewMessage('')
    }
  },[newMessage,messages])
  
  return (
    <div className="App">
      <Chat>
        <AnimatePresence>
          {messages.map(m =>(
            <Bubble key ={m} id={m}>
              {m}
            </Bubble>
          ))}
        </AnimatePresence>
        <BubbleInput
        value={newMessage}
        onChange={SetnewMessage}
        onSubmit = {handleSubmit}
        />
      </Chat>
    </div>
  )
}

export default App
