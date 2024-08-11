import react from 'react'
import ReactDom from 'react-dom/client'
const App = () => {
    return (
        <h1>Hello World</h1>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)
