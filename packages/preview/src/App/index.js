/* eslint-disable max-len */
// @flow

import * as React from "react";
import BContainer from "components/BContainer";
import BContainerItem from "components/BContainerItem";

import BurgerSqueeze from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

import BurgerArrow from "@animated-burgers/burger-arrow";
import "@animated-burgers/burger-arrow/dist/styles.css";

import BurgerSlide from "@animated-burgers/burger-slide";
import "@animated-burgers/burger-slide/dist/styles.css";

import BurgerSlip from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";

import BurgerRotate from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";

import Content from "components/Content";
import Section from "components/Section";
import Code from "components/Code";

import "./App.scss";

const bgs = [
  "#2c2c54",
  "#474787",
  "#34ace0",
  "#33d9b2",
  "#ffb142",
  "#ff793f",
  "#ff5252",
  "#b33939"
];

const burgers = [
  {
    item: <BurgerSqueeze />,
    title: "Squeeze"
  },
  {
    item: <BurgerSlide />,
    title: "Slide"
  },
  {
    item: <BurgerSlip />,
    title: "Slip"
  },
  {
    item: <BurgerRotate />,
    title: "Rotate"
  },
  {
    item: <BurgerArrow />,
    title: "Arrow"
  },
  {
    item: <BurgerArrow direction="right" />,
    title: "Arrow Right"
  },
  {
    item: <BurgerArrow direction="up" />,
    title: "Arrow Up"
  },
  {
    item: <BurgerArrow direction="down" />,
    title: "Arrow Down"
  }
].map((burger, index) => ({
  ...burger,
  bg: bgs[index]
}));

const App = () => (
  <div className="app">
    <Section className="hero">
      <Content style={{ maxWidth: 650 }}>
        <h1>Animated CSS burger components</h1>
        <p>
          Available as plain <a href="#htmlcss">html/css</a> or as{" "}
          <a href="#react">React</a> components. This burger component is part
          of the{" "}
          <a
            href="https://developer.dashboard-ui.com/?from=animated_burgers"
            rel="noreferrer noopener"
            target="_blank"
          >
            Dashboard UI Kit 3.0
          </a>
          {" with Typescript support! "}
          <a
            href="https://github.com/march08/dashboard-ui-kit"
            rel="noreferrer noopener"
            target="_blank"
          >
            (github)
          </a>
          {"."}
        </p>
        <br />
        <a
          aria-label="Star march08/animated-burgers on GitHub"
          className="github-button"
          data-icon="octicon-star"
          href="https://github.com/march08/animated-burgers"
        >
          700+ Stars
        </a>
        <br />
        <br />
        <br />
        <p>
          <i>
            {
              "Thank you for your support! If you want to follow my work, you can read my articles on "
            }
            <a
              href="https://medium.com/@march08"
              rel="noopener noreferrer"
              target="_blank"
            >
              medium
            </a>
            {" or check my daily "}
            <a
              href="https://instagram.com/nroman_codes"
              rel="noopener noreferrer"
              target="_blank"
            >
              image stories
            </a>
            .
          </i>
        </p>
      </Content>
    </Section>
    <BContainer>
      {burgers.map(({ title, bg, item }) => (
        <BContainerItem
          key={title}
          style={{
            backgroundColor: bg
          }}
        >
          {item}
          <span className="item-title">{title}</span>
        </BContainerItem>
      ))}
    </BContainer>
    <Section id="htmlcss">
      <Content>
        <h2>Using HTML/CSS</h2>
        <p>The usage with HTML is super straightforward with few steps.</p>
        <h3>Getting the CSS</h3>
        <p>
          To keep the CSS lightweight, you should import only what you need!
        </p>
        <p>
          {" "}
          You will find a corresponding style in the{" "}
          <a
            href="https://github.com/march08/animated-burgers"
            rel="noreferrer noopener"
            target="_blank"
          >
            repository
          </a>
          , follow the path{" "}
          <code>./packages/__YourBurgerStyle__/dist/styles.css</code>
        </p>
        <p>
          Download the file and link it to your html or copy it to your main
          file.
        </p>
        <h3>HTML markup</h3>
        <p>
          The html is super simple, this is an example using an arrow animation:
        </p>

        <Code className="html">
          {`<div class="burger burger-arrow">
  <div class="burger-lines"></div>
</div>`}
        </Code>
        <p>To display open state, simply add "open" class to the burger.</p>

        <Code className="html">
          {`<div class="burger burger-arrow open">
  <div class="burger-lines"></div>
</div>`}
        </Code>
        <p>
          If some animations require direction, such as arrow, you can simply
          add a class that will handle a direction, such as:
        </p>
        <Code className="html">
          {`<div class="burger burger-arrow burger-right">
  <div class="burger-lines"></div>
</div>`}
        </Code>
        <h3>List of classes for different direction</h3>
        <ul>
          <li>burger-left (this is a default behaviour)</li>
          <li>burger-right</li>
          <li>burger-up</li>
          <li>burger-down</li>
        </ul>
        <h3>List of classes for different animation</h3>
        <ul>
          <li>burger-arrow</li>
          <li>burger-rotate</li>
          <li>burger-slide</li>
          <li>burger-slip</li>
          <li>burger-squeeze</li>
        </ul>
      </Content>
    </Section>
    <Section
      id="react"
      style={{ backgroundColor: "white", borderTop: "1px solid #eee" }}
    >
      <Content>
        <h2>Using burgers in your React app</h2>
        <p>
          Each burger style is published as npm package separately, that means
          you are importing only what is necessary.
        </p>
        <h3>Include burger in your project</h3>

        <Code className="javascript">
          {`npm install --save @animated-burgers/{burger-style} classnames
// or using yarn
yarn add @animated-burgers/{burger-style} classnames`}
        </Code>
        <h3>Use it in the code</h3>
        <Code className="javascript">
          {`// React Component
import Burger from '@animated-burgers/{burger-style}' 
// don't forget the styles
import '@animated-burgers/{burger-style}/dist/styles.css' 

...

// default state, other props are passed down to the wrapping element
<Burger {...props}/>

// open state
<Burger isOpen={ true } />

// some burgers, such as arrow, supports direction
// (left - default, up, right, down)
<Burger direction="right" />


// By default, div will be rendered as a wrapping element
// You can pass a different wrapping component
<Burger Component="button" type="button" />

// results in
<button class="burger" type="button>
  <div class="burger-lines">
</button>
`}
        </Code>
        <h3>List of available burger packages</h3>
        <ul>
          <li>@animated-burgers/burger-arrow</li>
          <li>@animated-burgers/burger-rotate</li>
          <li>@animated-burgers/burger-slide</li>
          <li>@animated-burgers/burger-slip</li>
          <li>@animated-burgers/burger-squeeze</li>
        </ul>
      </Content>
    </Section>
    <Section style={{ borderTop: "1px solid #eee" }}>
      <Content>
        <h2>Styling the burger</h2>
        <p>
          You can change the properties of the burger by overriding a class or
          adding a class. Here are some tricks you can use with these burgers.
          If you want to modify different properties, you can always check the
          source SCSS files. You can find them in the repository:
        </p>

        <Code className="javascript">
          {`// base styling
packages/Burger/styles.scss
// + custom styling
packages/{burger-style}/styles.scss`}
        </Code>

        <h3>Changing Colour</h3>
        <p>
          You can change the properties of the burger by overriding a class or
          adding a class. Here are some tricks you can use with these burgers.
          If you want to modify different properties, you can always check the
          source SCSS files.
        </p>

        <h3>Changing Colour</h3>
        <p>To change the color of the burger, add few lines in your css.</p>

        <Code className="css">
          {`.burger .burger-lines,
.burger .burger-lines:after,
.burger .burger-lines:before { background-color: red; }`}
        </Code>

        <h3>Changing size</h3>
        <p>
          The size is scaling based on the font-size. The dimensions of the
          lines are set by em values. The baseline is set to 12px.
        </p>

        <Code className="html">
          {`<!-- smaller -->
<div class="burger burger-squeeze" style="font-size: 8px">
  <div class="burger-lines"></div>
</div>

<!-- default -->
<div class="burger burger-squeeze">
  <div class="burger-lines"></div>
</div>


<!-- larger -->
<div class="burger burger-squeeze" style="font-size: 18px">
  <div class="burger-lines"></div>
</div>`}
        </Code>
        <p>results into</p>
        <div style={{ background: "black", padding: "40px" }}>
          <div className="burger burger-squeeze" style={{ fontSize: "8px" }}>
            <div className="burger-lines" />
          </div>
          <br />
          <div className="burger burger-squeeze">
            <div className="burger-lines" />
          </div>
          <br />
          <div className="burger burger-squeeze" style={{ fontSize: "18px" }}>
            <div className="burger-lines" />
          </div>
        </div>
      </Content>
    </Section>
  </div>
);

App.defaultProps = {};

export default App;
