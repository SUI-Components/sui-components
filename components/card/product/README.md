# SUI Card Product

SUI `CardProduct` component is a card containing a slider of images, title, description and some additional information (extras, attributes...).

## Installation
```
$ npm install --save @schibstedspain/sui-card-product
```

## Usage
```
import React, { Component } from 'react'
import CardProduct from '@schibstedspain/sui-card-product'

class MyCardProduct extends Component {
  render () {
    return (
      <CardProduct
        url='http://www.coches.net/ofertas_especiales/audi/q7/madrid/nuevo-30_tdi_272cv_quattro_tiptronic_design-diesel-31292213-nuvn.aspx'
        images={[
          'http://a.ccdn.es/cnet/2016/01/27/31292213/92548260_g.jpg',
          'http://a.ccdn.es/cnet/2016/01/27/31292213/92547859_g.jpg',
          'http://a.ccdn.es/cnet/2016/01/27/31292213/92547876_g.jpg'
        ]}
        title='67.850 €'
        description='AUDI Q7 3.0 TDI 272CV quattro tiptronic Design 5p.'
        date='Hace 3 min.'
        attributes={[
          'Madrid',
          'Diesel',
          '2013',
          '99.000 km'
        ]}
        highlighted
        tags={[
          'Financiado',
          'Con Garantía'
        ]}
        favorited
        handleFavorite={() => { /* Do your stuff here. */ }}
      />
    )
  }
}
```
