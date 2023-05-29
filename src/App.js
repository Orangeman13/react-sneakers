function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/pictures/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/pictures/cart.svg" alt="cart" />
            <span> 1205 rub.</span>
          </li>
          <li>
            <img src="/pictures/Union.svg" alt="union" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/pictures/sneakers/s1.jpg"
              alt="s1"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/pictures/plus.svg" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/pictures/sneakers/s2.jpg"
              alt="s1"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/pictures/plus.svg" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/pictures/sneakers/s3.jpg"
              alt="s1"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/pictures/plus.svg" alt="+" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/pictures/sneakers/s4.jpg"
              alt="s1"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/pictures/plus.svg" alt="+" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
