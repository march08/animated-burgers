// @flow

import * as React from 'react'
import BContainer from 'components/BContainer'
import BContainerItem from 'components/BContainerItem'

import BurgerSqueeze from '@css-burgers/burger-squeeze'
import '@css-burgers/burger-squeeze/dist/styles.css'
import BurgerArrow from '@css-burgers/burger-arrow'
import '@css-burgers/burger-arrow/dist/styles.css'


import './App.scss'

const burgers = [
  {
    item: <BurgerArrow isOpen />,
    bg: '#ff5252',
  },
  {
    item: <BurgerArrow
      className="burger-right"
      isOpen
    />,
    bg: '#34ace0',
  },
  {
    item: <BurgerArrow
      className="burger-top"
      isOpen
    />,
    bg: '#33d9b2',
  },
  {
    item: <BurgerArrow
      className="burger-bottom"
      isOpen
    />,
    bg: '#ffb142',
  },
  {
    item: <BurgerSqueeze />,
    bg: '#0066cc',
  },
]

const App = () => (
  <div className="app">
    <BContainer>
      {
        burgers.map(({ bg, item }) => (
          <BContainerItem
            key={ bg }
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
