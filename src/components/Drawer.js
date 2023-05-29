function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{" "}
          <img
            className="btnX cu-p"
            src="/pictures/sneakers/btnX.svg"
            alt="X"
          />
        </h2>

        <div className="Items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/pictures/sneakers/s1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btnX" src="/pictures/sneakers/btnX.svg" alt="X" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/pictures/sneakers/s1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="btnX" src="/pictures/sneakers/btnX.svg" alt="X" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ{" "}
            <img src="/pictures/sneakers/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
