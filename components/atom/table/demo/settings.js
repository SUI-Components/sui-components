import Button from '@s-ui/react-atom-button'

const PriceComponent = () => (
  <div>
    <span>Desde </span>
    <strong>000.000€</strong>
  </div>
)

const LinkComponent = () => (
  <div>
    <Button>Ocasión</Button>
    <Button>Más info</Button>
  </div>
)

export const contentHeadMook = [
  'Versión',
  'Año',
  'Combustible',
  'Potencia',
  'Precio',
  ''
]

export const contentBodyMook = [
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th'
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: <PriceComponent />},
    {content: <LinkComponent />}
  ],
  [
    {
      content: 'This <td> element has a colspan 6',
      colspan: 6
    }
  ],
  [
    {
      content: 'This <td> element has a colspan 3',
      colspan: 3
    },
    {
      content: 'This <td> element has a colspan 3',
      colspan: 3
    }
  ],
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th'
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: <PriceComponent />},
    {content: <LinkComponent />}
  ],
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th'
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: <PriceComponent />},
    {content: <LinkComponent />}
  ]
]

export const contentFootMook = [
  'Versión',
  'Año',
  'Combustible',
  'Potencia',
  'Precio',
  ''
]
