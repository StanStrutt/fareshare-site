import "./what-we-do.css"

export default function Sections(props) {
    return(
        <div className="stat-section">
            <div className="stat-section-margin">
                <div className="img-section">
                    <img className="stat-image" src={props.link}/>
                </div> 
                <div className="stat-text">
                    <p className="headline-stat">{props.headline}</p>
                    <p className="subline-stat">{props.subline}</p>
                </div>
            </div>
        </div>    
    )
}