import React from "react";
/*  First we declare a variable which will store the user's name and their city.
2. Then we return a div with an id of "home".
3. To this div, we attach a h1 tag, along with some styling.
4. Inside the h1 tag, we include a prop, which is not a native prop, but a custom
   prop that we created. This is why we included the other import above.
5. The prop will print out the user's name and city.

The HTML for the above application would look like this:

.. code-block:: html

    <!doctype html>
    <html>
      <head>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://unpkg.com/react-bootstrap@0.31.0/dist/react-bootstrap.min.js"></script>
        <script src="https://unpkg.com/prop-types@15/prop-types.min.js"></script>
        <script type="text/babel">
            {here}
        </script>
        <style>
            #home {
                padding: 100px;
                background-color: lightblue;
            }
            body {
                background-color: #000000;
            }
        </style>
      </head>
      <body>
        <div id="home">
        </div>
      </body>
    </html>


The above example is an application that is rendered on the server, but uses React to render the page. The key benefit to using React is that your server will only have to render the page once. For more information, see the :ref:`React <react>` section.


Approach 2: Client Side Rendering
-----------------------------------
Another approach is client side rendering, where the page is rendered on the client side (the browser). This has a lot of*/
function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;