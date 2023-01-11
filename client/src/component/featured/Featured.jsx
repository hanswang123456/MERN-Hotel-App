import "./featured.css"
import useFetch from "../../hooks/useFetch"

const Featured = () =>{

    const  {data, loading, error} = useFetch("/hotels/countByCity?cities=london,madrid,berlin")

    return(<div className="featured">
        {loading ? "Please Wait": <><div className="featuredItem">
            <img className="featuredImg" alt="cityskyline" src="https://www.qmul.ac.uk/media/qmul/London-Bridge.jpg"/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" alt="cityskyline" src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg_1014274486.jpg"/>
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" alt="cityskyline" src="https://media.timeout.com/images/105303515/750/422/image.jpg"/>
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div></>}
    </div>)
}
export default Featured

