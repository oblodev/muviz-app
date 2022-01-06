import React from "react";
import MuviItem from "../MuvizItem/MuviItem";
import "./muvizgrid.css";

function MuvizGrid({ items }) {
  {
    /*}
  const [items, setItems] = useState([]);
  
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=52291c7d63b8c123354a244384d96744&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`
      );
      //console.log(result.data);
      //console.log(result.data.results);

      setItems(result.data.results);
    };

    fetchItems();
  }, [page]);
*/
  }
  {
    /*}
  const hideShowBtn = () => {
    console.log(page);
    if (page === 0) {
      setHidden(true);
      setPage(page - 1);
      console.log(page);
    } else {
      setHidden(false);
      setPage(page - 1);
      console.log(page);
    }
  };
*/
  }
  return (
    <div className="muviz-grid">
      <section className="cards">
        {items.map((item) => (
          <MuviItem key={item.id} item={item}></MuviItem>
        ))}
      </section>
    </div>
  );
}

export default MuvizGrid;
