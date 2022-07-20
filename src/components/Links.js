import React from "react";
/* Loading the javascript and css files right on the page.
2. Printing out HTML in the javascript file.

But what is the problem with this? 
Well the problem is that when our page is loaded, the javascript is not
run until after the page is shown to the user. That means that the links
are not populated. This is bad because it means that the user has to
click the link twice. 

To solve this, we can use a React Hook called useState and inside of it,
we will use a javascript object to hold the linkss. */
function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default Links;