import {Content1, Content2, Content3, Content4} from '../components/Contents'
import {AntDesignIcon} from '@s-ui/documentation-library'
import AtomIcon, {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import {STATUSES} from 'components/molecule/progressSteps/src'

export const configBasic = {
  1: {
    label: 'Selección de Productos',
    content: <Content1 />,
    status: STATUSES.VISITED
  },
  2: {
    label: 'Tu pago seguro',
    content: <Content2 />,
    status: STATUSES.ACTIVE
  },
  3: {
    label: 'Resumen de tu compra',
    content: <Content3 />,
    status: STATUSES.NORMAL
  },
  4: {
    label: 'Valoración del proceso',
    content: <Content4 />,
    status: STATUSES.NORMAL
  }
}

export const configWithIcons = {
  1: {
    label: 'Selección de Productos',
    content: <Content1 />,
    icon: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillApi" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    iconActive: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    status: STATUSES.VISITED
  },
  2: {
    label: 'Tu pago seguro',
    content: <Content2 />,
    icon: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillBug" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    iconActive: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    status: STATUSES.VISITED
  },
  3: {
    label: 'Resumen de tu compra',
    content: <Content3 />,
    icon: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillFire" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    iconActive: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    status: STATUSES.ACTIVE
  },
  4: {
    label: 'Valoración del proceso',
    content: <Content4 />,
    icon: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillTrophy" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    iconActive: (
      <AtomIcon size={ATOM_ICON_SIZES.extraLarge}>
        <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
      </AtomIcon>
    ),
    status: STATUSES.NORMAL
  }
}
