import { assets } from '@/utils/asset-utils'
import { useState, useEffect, RefObject } from 'react'
import Image from 'next/image'

const Cursor = ({ buttonRef }: { buttonRef: RefObject<HTMLButtonElement> }) => {
   const [cursorPosition, setCursorPosition] = useState({
      x: -100,
      y: -100
   })

   useEffect(() => {
      async function animateCursor() {
         if (!buttonRef.current) return
         await new Promise((resolve) => setTimeout(resolve, 1000))
         const buttonRect = buttonRef.current.getBoundingClientRect()
         //console.log("🚀 ~ file: cursor.tsx:16 ~ animateCursor ~ buttonRect:", buttonRect)

         const x = buttonRect.x + buttonRect.width / 2
         const y = buttonRect.y + buttonRect.height / 2
         setCursorPosition({ x, y })
         await new Promise((resolve) => setTimeout(resolve, 1000))

         const newY = y + 150
         setCursorPosition({ x, y: newY })

         buttonRef.current.style.transition = "transform 700ms ease-in-out"
         buttonRef.current.style.transform = "translateY(150px)"
         await new Promise((resolve) => setTimeout(resolve, 1000))

         setCursorPosition({ x: window.innerWidth - 100, y: -100 })
         await new Promise((resolve) => setTimeout(resolve, 1000))

         buttonRef.current.style.transition = "transform 700ms ease-in-out"
         buttonRef.current.style.transform = "translateY(0px)"
      }
      const interval = setInterval(() => {
         console.log('This will run every 8 second!');
         animateCursor()
      }, 8000);
      return () => clearInterval(interval);
   }, [])

   return (
      <Image
         style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`
         }}
         className='absolute transition-all duration-700 ease-in-out z-50'
         alt="cursor"
         src={assets.cursor}
         width={80}
         height={50}
      />
   )
}

export default Cursor