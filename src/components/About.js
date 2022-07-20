import React from "react";
import Links from "./Links";
/*  It creates a div with an id of "about"
2.  It renders the text "About Me" in bold
3.  It renders the bio paragraph if there is one
4.  It renders the image (if theres one)
5.  It creates an anchor tag with links to both the github and the linkedin account
6.  Each link has a text of the url name and an image of the url
``` */
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;