import "./pagebutton.css";

function Pagebutton({ setPage }) {
  const pageNumber = 1;

  return (
    <div className="button-wrapper">
      <button className="btn-left">Page </button>
      <button className="btn-right" onClick={() => setPage(pageNumber + 1)}>
        Page 2
      </button>
    </div>
  );
}

export default Pagebutton;
