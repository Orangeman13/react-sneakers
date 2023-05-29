function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/pictures/sneakers/unliked.svg" alt="unlike" />
      </div>
      <img width={133} height={112} src="/pictures/sneakers/s1.jpg" alt="s1" />
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
  );
}
export default Card;
