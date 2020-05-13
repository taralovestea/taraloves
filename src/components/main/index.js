import React from "react";
import "./style.css";
import Navbar from "./navbar"

export default function main() {
    return <div>
        <Navbar /> 
    
    <section class="hero is-info is-fullheight">
        <div class="hero-head"></div>
           
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Welcome.
                        </h1>
                        <h2 class="subtitle">
                            Tara Loves is a cultivation
                            of all my passions.
                            It began as my instagram handle "taralovestea"
                            that I made in highschool- but now as a 26 year old
                            I have many projects, insights, and knowledge to add to the list.
                            I'm glad you are here. 
                        </h2>
                        <div class="box">
                        <form
                action="https://formspree.io/taraelisabethhughes@gmail.com"
                method="POST"
            >
                            <div class="field is-grouped">
                                <p class="control is-expanded">
                                    <input class="input" type="text" placeholder="Enter your email" /> 
                                <div>
                                <p class="control">
                                    <a class="button is-info">
                                        Notify Me
                                    </a>
                                </p>
                            </div>
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

    </div>
    <script async type="text/javascript" src="../js/bulma.js"></script>
</section>
</div>

}