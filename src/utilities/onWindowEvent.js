import { onMounted, onUnmounted } from 'vue'

export default function useWindowEvent(event, handleEvent) {
  onMounted( () => window.addEventListener(event, handleEvent) )
  onUnmounted( () => window.removeEventListener(event, handleEvent) ) 
}