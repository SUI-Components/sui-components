import React from 'react'
import {
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6
} from '../components/Contents'

import {
  IconLineBackup,
  IconLineDashboard,
  IconLineExtension,
  IconLineHttps
} from '../Icons'

export const configBasic = {
  1: {
    label: 'Productos',
    content: <Content1 />
  },
  2: {
    label: 'Pago',
    content: <Content2 />,
    active: true
  },
  3: {
    label: 'Tu compra',
    content: <Content3 />,
    disabled: true
  },
  4: {
    label: 'Valoración',
    content: <Content4 />
  }
}

export const configBasic6Tabs = {
  1: {
    label: 'Tab 1',
    content: <Content1 />
  },
  2: {
    label: 'Tab 2',
    content: <Content2 />
  },
  3: {
    label: 'Tab 3',
    content: <Content3 />
  },
  4: {
    label: 'Tab 4',
    content: <Content4 />
  },
  5: {
    label: 'Tab 5',
    content: <Content5 />
  },
  6: {
    label: 'Tab 6',
    content: <Content6 />
  }
}

export const configWithIcons = {
  1: {
    label: 'Productos',
    content: <Content1 />,
    icon: <IconLineBackup />
  },
  2: {
    label: 'Pago',
    content: <Content2 />,
    icon: <IconLineDashboard />,
    active: true
  },
  3: {
    label: 'Tu compra',
    content: <Content3 />,
    icon: <IconLineExtension />
  },
  4: {
    label: 'Valoración',
    content: <Content4 />,
    icon: <IconLineHttps />,
    disabled: true
  }
}
