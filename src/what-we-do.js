import "./what-we-do.css"
import Sections from "./what-we-do-rows"

export default function Whatwedo() {
    return (
        <div className="Whatwedo">
            <div className="what-we-do-cont">
                <div className="what-we-do">
                    <div className="what-we-do-pad">
                        <div className="what-we-do-text">
                            <h1>What We Do</h1>
                            <p className="food-waste">
                                We believe that no good food should go to waste.
                                <br/>
                                We redistribute surplus food to charities that turn it into meals.
                            </p>
                            <hr/>
                            <h2>FareShare’s work in 2023-24</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="images-container">
                <div className="images-row">
                    <div className="images-padding">
                        <div className="images-content">
                            <div className="row-1">
                                <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/Food-Icon-green-bg.png" headline="56,000" subline="tonnes of food redistributed"/>
                                <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/Charity-icon-pink-bg.png" headline="8,000" subline="local charities served"/>
                            </div>
                            <div className="row-2">
                                <div className="third">
                                    <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/People-icon-blue-bg.png" headline={
                                        <div className="third-text">
                                            <p className="nearly-section">Nearly</p>
                                            <p>1 million people</p>
                                        </div>
                                        
                                    } subline="reached"/>
                                </div>
                                <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/CO2e-icon-yellow-bg.png" headline="2 tonnes" 
                                subline={
                                    <p>
                                        CO
                                        <sub>2</sub>
                                        e prevented from waste with every tonne of surplus food redistributed
                                    </p>
                                }/>
                            </div>
                            <div className="learn-more-container">                               
                                <p className="learn-more">
                                    <a className="impact-button" href="/what-we-do/our-impact/">
                                    Learn more about our impact</a>
                                </p>
                            </div>
                            <div className="spacer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}