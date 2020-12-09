import React, {Component} from "react";
import straipsniai from "../data/straipsniai";
import Article from "../article/Article";
import Contacts from "../Contacts/Contacts";
import Booklist from "../booklist/Booklist";
import Hooks from "../hooks/Hooks";

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
                <Hooks/>
                <div className="row justify-content-center">
                    {dataArticles}
                </div>
                <Booklist/>
                <Contacts name= "Vaida" email = "vaida@gmail.com"
                initialAge = {21}/>
            </main>
        )
    }
}
export default Main;