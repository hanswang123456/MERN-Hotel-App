import "./featuredProperties.css"
import useFetch from "../../hooks/useFetch";
const FeaturedProperties = () =>{
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");



    return(<div className="fp">
      {loading ? "Loading": <>
    {data.map(item=><div className="fpItem" key={item._id}>
      <img
        src={item.photos[0]}
        alt=""
        className="fpImg"
      />
      <span className="fpName">{item.name}</span>
      <span className="fpCity">{item.city}</span>
      <span className="fpPrice">Starting at ${item.cheapestPrice}/night</span>
      {item.rating &&<div className="fpRating">
        <button>{item.rating}/10</button>
        <span>{item.rating>4.5? "Exceptional":item.rating>4? "Exellent":item.rating>3.5? "Good": item.rating>3? "Average": "Low"}</span>
      </div>}
    </div>)}</>}
    
    </div>
    )
}

export default FeaturedProperties