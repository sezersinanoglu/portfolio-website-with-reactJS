import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <a href="#top" className="go-top active" data-go-top="" title="Go to Top">
        <ion-icon
          name="arrow-up"
          role="img"
          class="md hydrated"
          aria-label="arrow up"
        ></ion-icon>
      </a>
    </>
  );
}

export default App;
