import "./App.css";
import Container from "./components/Container";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import More from "./components/More";
import Navigation from "./components/Navigation";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="w-screen my-0 ">
      <Container>
        <Navigation />
        <Hero />
      </Container>
      <Container background="bg-greenish">
        <Transactions />
      </Container>
      <Container>
        <Transfer />
      </Container>
      <Container background="bg-greenish">
        <Highlights />
        <Customers />
        <More />
      </Container>
      <Container background="bg-blue">
        {" "}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
