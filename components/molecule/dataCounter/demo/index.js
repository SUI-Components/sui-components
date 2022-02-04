import {useState} from 'react'

import {AntDesignIcon, H1, Paragraph, Code} from '@s-ui/documentation-library'

import MoleculeDataCounter, {
  moleculeDataCounterSizes
} from 'components/molecule/dataCounter/src/index.js'

import {stylesSection, propsMessages} from './settings.js'
import ArticleState from './Articles/ArticleState.js'
import ArticleLoading from './Articles/ArticleLoading.js'
import ArticleSizes from './Articles/ArticleSizes.js'

const Demo = () => {
  const [value, setValue] = useState(5)
  const [isLoading, setIsLoading] = useState(false)

  const consoleValueLoading = (e, {value}) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log({value}) // eslint-disable-line
      setIsLoading(false)
    }, 1000)
  }

  const handleClick = (e, {value}) => {
    setValue(value)
  }

  return (
    <div>
      <H1>Data Counter</H1>
      <Paragraph>
        <Code>MoleculeDataCounter</Code> is an input type number controller we
        can use to increase (+1) or decrease (-1) the value of such input.
      </Paragraph>
      <ArticleState />
      <br />
      <ArticleLoading />
      <br />
      <ArticleSizes />
      <br />
      <h2>Basic</h2>
      <div style={stylesSection}>
        <MoleculeDataCounter id="demo1" label="Label" {...propsMessages} />
      </div>

      {/*<h2>Controlled</h2>*/}
      {/*<div style={stylesSection}>*/}
      {/*  <MoleculeDataCounter*/}
      {/*    id="demo1"*/}
      {/*    label="Label"*/}
      {/*    onChange={handleClick}*/}
      {/*    value={value}*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<h2>Loading</h2>*/}
      {/*<div style={stylesSection}>*/}
      {/*  <MoleculeDataCounter*/}
      {/*    isLoading={isLoading}*/}
      {/*    onChange={consoleValueLoading}*/}
      {/*    label="Click an action to start loading"*/}
      {/*    id="demo1"*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<h2>Custom Icons</h2>*/}
      {/*<div style={stylesSection}>*/}
      {/*  <MoleculeDataCounter*/}
      {/*    addIcon={*/}
      {/*      <AntDesignIcon*/}
      {/*        icon="AiOutlinePlus"*/}
      {/*        style={{color: 'currentColor'}}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    id="demo2"*/}
      {/*    label="Label"*/}
      {/*    onChange={consoleValue}*/}
      {/*    substractIcon={*/}
      {/*      <AntDesignIcon*/}
      {/*        icon="AiOutlineMinus"*/}
      {/*        style={{color: 'currentColor'}}*/}
      {/*      />*/}
      {/*    }*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<h2>Disabled</h2>*/}
      {/*<div style={stylesSection}>*/}
      {/*  <MoleculeDataCounter*/}
      {/*    onChange={consoleValue}*/}
      {/*    label="All"*/}
      {/*    id="demo3"*/}
      {/*    disabled*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*  <br />*/}
      {/*  <MoleculeDataCounter*/}
      {/*    onChange={consoleValue}*/}
      {/*    label="Input"*/}
      {/*    id="demo4"*/}
      {/*    inputDisabled*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<h2>Min=2 & Max=7 w/ error</h2>*/}
      {/*<div style={stylesSection}>*/}
      {/*  <MoleculeDataCounter*/}
      {/*    onChange={consoleValue}*/}
      {/*    min={2}*/}
      {/*    max={7}*/}
      {/*    label="Label"*/}
      {/*    value={13}*/}
      {/*    id="demo5"*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<h2>Sizes</h2>*/}
      {/*<div style={stylesSection}>*/}
      {/*  <MoleculeDataCounter*/}
      {/*    onChange={consoleValue}*/}
      {/*    label="Small"*/}
      {/*    id="demo6"*/}
      {/*    min={3}*/}
      {/*    size={moleculeDataCounterSizes.SMALL}*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*  <br />*/}

      {/*  <MoleculeDataCounter*/}
      {/*    onChange={consoleValue}*/}
      {/*    label="Large"*/}
      {/*    id="demo6"*/}
      {/*    min={3}*/}
      {/*    size={moleculeDataCounterSizes.LARGE}*/}
      {/*    {...propsMessages}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  )
}

export default Demo
