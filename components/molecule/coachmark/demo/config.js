import Badge, {atomBadgeSizes} from '@s-ui/react-atom-badge'
import {
  atomButtonColors,
  atomButtonDesigns,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import {moleculeCoachmarkActionButtonIds} from '../src/index.js'

export const COACHMARK_STEPS_CONTENT = [
  {
    target: '.sui-molecule-coachmark-step-1',
    title: 'Tooltip example with all elements',
    content:
      'It has a badge, a close button, a heading, a description, an image on the side, a progress indicator and action buttons to continue the tour.',
    disableBeacon: true
  },
  {
    target: '.sui-molecule-coachmark-step-2',
    title: 'It has the same elements than the previous...',
    content:
      'But we have removed the progress indicator and now it has a back button available'
  },
  {
    target: '.sui-molecule-coachmark-step-3',
    title: 'Antoher variant buddy',
    content:
      'Whoop! Now there is only visible a heading, description, a close icon, a badge and a next button '
  },
  {
    target: '.sui-molecule-coachmark-step-4',
    title: 'Less stuff in here',
    content: 'Only heading, description and next button'
  },
  {
    target: '.sui-molecule-coachmark-step-5',
    content: 'Minimalist one, only description and next button'
  }
]

export const exampleBadge = <Badge size={atomBadgeSizes.MEDIUM} label={'NEW'} />
export const exampleImage = {
  url: 'https://s.ccdn.es/images/coches-net-PRO/anounce.svg',
  alt: 'announcement'
}
export const exampleActionButtons = [
  {
    id: moleculeCoachmarkActionButtonIds.BACK,
    color: atomButtonColors.NEUTRAL,
    design: atomButtonDesigns.OUTLINE,
    size: atomButtonSizes.SMALL
  },
  {
    id: moleculeCoachmarkActionButtonIds.NEXT,
    color: atomButtonColors.PRIMARY,
    design: atomButtonDesigns.SOLID,
    size: atomButtonSizes.SMALL
  }
]
export const exampleCloseIcon = <>{'X'}</>

export const COACHMARK_STEPS = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
  FOURTH: 3,
  FIFTH: 4
}
