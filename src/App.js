import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/pictures/sneakers/s1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "/pictures/sneakers/s2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/pictures/sneakers/s3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/pictures/sneakers/s4.jpg",
  },
];

function App(props) {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-blog d-flex">
            <img src="/pictures/search.svg" alt="search" />
            <input placeholder="Поиск...." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
