import './App.css'

const App = ({name,roll_no,email}) => {
  return (
    <div id="disp">
      <h1>Student Details</h1>
      <h2>Name: {name}</h2>
    <h2>roll No: {roll_no}</h2>
    <h2>email:{email}</h2>
    
    </div>
  )
}

export default App
