import React from "react";
import Book from "../book/book";
import "./booklist.css";


function Booklist(){
    return (
        <div className="booklist justify-content-center">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}
export default Booklist