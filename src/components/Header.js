function Header() {
  return (
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
  );
}
export default Header;
