import CalculatorProvider from "./components/contexts/context"
import LayOut from "./components/layout"

const App = () => {
  
  return (
      <CalculatorProvider>
        <LayOut/>
      </CalculatorProvider>
  )
}

export default App
