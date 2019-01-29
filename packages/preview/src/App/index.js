// @flow

import * as React from 'react'
import BContainer from 'components/BContainer'
import BContainerItem from 'components/BContainerItem'

import BurgerSqueeze from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/styles.scss'

import BurgerArrow from '@animated-burgers/burger-arrow'
import '@animated-burgers/burger-arrow/styles.scss'

import BurgerSlide from '@animated-burgers/burger-slide'
import '@animated-burgers/burger-slide/styles.scss'

import BurgerSlip from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/styles.scss'

import BurgerRotate from '@animated-burgers/burger-rotate'
import '@animated-burgers/burger-rotate/styles.scss'

import Content from 'components/Content'
import Section from 'components/Section'


import './App.scss'

const bgs = [
  '#2c2c54',
  '#474787',
  '#34ace0',
  '#33d9b2',
  '#ffb142',
  '#ff793f',
  '#ff5252',
  '#b33939',
]

const burgers = [
  {
    item: <BurgerSqueeze />,
    title: 'Squeeze',
  },
  {
    item: <BurgerSlide />,
    title: 'Slide',
  },
  {
    item: <BurgerSlip />,
    title: 'Slip',
  },
  {
    item: <BurgerRotate />,
    title: 'Rotate',
  },
  {
    item: <BurgerArrow />,
    title: 'Arrow',
  },
  {
    item: (<BurgerArrow
      className="burger-right"
      direction="right"
    />),
    title: 'Arrow Right',
  },
  {
    item: <BurgerArrow
      className="burger-top"
    />,
    title: 'Arrow Top',
  },
  {
    item: <BurgerArrow
      className="burger-bottom"
    />,
    title: 'Arrow Bottom',
  },
].map((burger, index) => ({
  ...burger,
  bg: bgs[index],
}))

const App = () => (
  <div className="app">
    <Section className="hero">
      <Content>
        <h1>Animated CSS burger components</h1>
        <p>Available as plain html/css or as React components.</p>
      </Content>
    </Section>
    <BContainer>
      {
        burgers.map(({ title, bg, item }) => (
          <BContainerItem
            key={ title }
            style={ {
              backgroundColor: bg,
            } }
          >
            {item}
            <span className="item-title">{title}</span>
          </BContainerItem>
        ))
      }
    </BContainer>
  </div>
)

App.defaultProps = {}

export default App
