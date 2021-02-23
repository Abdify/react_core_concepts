import './App.css';
import logo from './logo.svg';

function App() {
  const person = {
    name: 'xyz',
    id: 22,
    favColor: 'cyan'
  }
  const style = {
    fontSize: 20,
    color: "black",
    backgroundColor: person.favColor
  }

  const users = ["Super waste", 'Space dust', 'Fantabulous dart'];
  const products = [
    {name: 'The art of war', price: '$10'},
    {name: 'The Vinchi Code', price: '$15.20'},
    {name: 'The Coder', price: '$99.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p style={
          {color: person.favColor, backgroundColor: "#272727"}
          }>
          Hello, {person.name},<br/> your id is: {person.id}
        </p>
        <p style={style}>Using style as variable</p>

          <Product product={products[0]}></Product>
          <Product product={products[1]}></Product>
          <Product product={products[2]}></Product>

          <User name={users[0]}></User>
          <User name={users[1]}></User>
          <User name={users[2]}></User>

      </header>
    </div>
  );


  function Product(props) {
    const productStyle = {
      width: '20%',
      backgroundColor: 'lightGray',
      color: 'black',
      margin: '10px'
    }
    const {name, price} = props.product;
    
    const productDiv = (
      <div style={productStyle}>
        <h3>Name: {name}</h3>
        <h4>Price: {price}</h4>
        <button>Buy now</button>
      </div>
    )
    return productDiv;
  }


  function User(props) {
    const userStyle = {
      border: '2px solid yellow',
      margin: '10px',
      padding: '10px',
      width: '50%'
    }
    return (
    <div style={userStyle}>
      <h2>Name: {props.name}</h2>
      <p>Char: Serious guy</p>
    </div>
    )
  }

}

export default App;
