import React from "react";
import "./book.css";
import Discount from "../discount/Discount";


function Book(){
    return(
        <div className="oneBook">
            <Image/>
            <Author/>
            <Title/>
            <Price/>
            <Discount/>
        </div>
    )
}

const Image = () => <img src="https://images.unsplash.com/photo-1551029506-0807df4e2031?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80" alt="nuotrauka"/>;
const Author = () => <h2>Knygos autorius</h2>;
const Title = () => <p>Knygos pavadinimas</p>;
const Price = () => <p>Kaina tik 7 eur</p>;

export default Book