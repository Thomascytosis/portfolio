import React from "react"

import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Discord } from "react-bootstrap-icons";

import "./Footer.css";

const linkGithub = () => {
    window.open("https://github.com/Thomascytosis")
}
const linkLinkedin = () => {
    window.open("https://www.linkedin.com/in/tclarke3/")
}
const linkDiscord = () => {
    window.open("https://discordapp.com/users/Thomascytosis#5413")
}

export default function Footer(){
    return (
        <footer className="text-center m-3">
        <br />
          <Github title="New window link to my Github" className="icon btn" onClick={linkGithub} color="white" alt="link to my github" />
          <Linkedin title="New window link to my LinkedIn" className="icon btn linkedin" onClick={linkLinkedin} alt="link to my LinkedIn" color="rgb(10, 102, 194)" />
          <Discord title="New window link to my Discord" className="icon btn discord" onClick={linkDiscord} alt="link to my Discord" color="rgb(88, 101, 242)" />
            <p className="ft--text">@Thomascytosis 2022 🐍🦆☕🧾⛏⚗👢</p>
        </footer>
    )
}