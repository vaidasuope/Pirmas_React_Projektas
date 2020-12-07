import React, {Component} from "react";
import straipsniai from "../data/straipsniai";
import Article from "../article/Article";

class Main extends Component {
    constructor() {
        super ();
    }
    render() {
        const dataArticles = straipsniai.map ( straipsnis =>
            <Article data =
                         {{key:straipsnis.id,
                         title:straipsnis.name,
                         description:straipsnis.description}}/>)
        return (
            <main>
                <div className="row">
                    {dataArticles}
                </div>
            </main>
        )
    }
}
export default Main;