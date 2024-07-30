import React from "react";
import OneHead from "./OneHead";
import './App.css';
class Hero extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
        //     <header className="bg-dark text-white text-center py-5">
        //     <div className="container ">

        //       <h1>Yussef Makhlouf ali iti</h1>
        //       <p>Web Developer & Designer</p>
        //       <button className="btn btn-outline-light mt-3">Contact Me</button>
        //     </div>
        //   </header>

            <section className="bg-dark text-white text-center py-5">
               <OneHead 
               img="assets/yussef.jpeg"
               title="Yussef Makhlouf ali iti"
               text="Web Developer & Designer"
               button="Contact Me"
               
               />

            </section>
        );
    }
}

export default Hero;