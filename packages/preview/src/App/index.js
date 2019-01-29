// @flow

import * as React from 'react'
import BContainer from 'components/BContainer'
import BContainerItem from 'components/BContainerItem'

import BurgerSqueeze from '@css-burgers/burger-squeeze'
import '@css-burgers/burger-squeeze/styles.scss'

import BurgerArrow from '@css-burgers/burger-arrow'
import '@css-burgers/burger-arrow/styles.scss'

import BurgerSlide from '@css-burgers/burger-slide'
import '@css-burgers/burger-slide/styles.scss'
import './styles.scss'

import Content from 'components/Content'
import Section from 'components/Section'


import './App.scss'

const burgers = [
  {
    item: <BurgerArrow />,
    bg: '#ff5252',
    title: 'Arrow',
  },
  {
    item: (<BurgerArrow
      className="burger-right"
      direction="right"
    />),
    bg: '#34ace0',
    title: 'Arrow Right',
  },
  {
    item: <BurgerArrow
      className="burger-top"
    />,
    bg: '#33d9b2',
    title: 'Arrow Top',
  },
  {
    item: <BurgerArrow
      className="burger-bottom"
    />,
    bg: '#ffb142',
    title: 'Arrow Bottom',
  },
  {
    item: <BurgerSqueeze />,
    bg: '#0066cc',
    title: 'Squeeze',
  },
  {
    item: <BurgerSlide />,
    bg: '#0066cc',
    title: 'Slide',
  },
]

const App = () => (
  <div className="app">
    <Section>
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
          </BContainerItem>
        ))
      }
    </BContainer>
  </div>
)

App.defaultProps = {}

export default App
