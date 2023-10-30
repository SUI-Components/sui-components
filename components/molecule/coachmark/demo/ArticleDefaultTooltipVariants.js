import {useState} from 'react'

import {Article, Cell, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeCoachmark, {moleculeCoachmarkActions} from '../src/index.js'
import CloseIcon from './CloseIcon.js'
import {
  COACHMARK_STEPS,
  COACHMARK_STEPS_CONTENT,
  exampleActionButtons,
  exampleBadge,
  exampleImage
} from './config.js'

const ArticleDefaultTooltipVariants = () => {
  const [runTour, setRunTour] = useState(false)
  const [showProgress, setShowProgress] = useState(true)
  const [badge, setBadge] = useState(exampleBadge)
  const [closeIcon, setCloseIcon] = useState(<CloseIcon />)
  const [image, setImage] = useState(exampleImage)
  const [actionButtons, setActionButtons] = useState(exampleActionButtons)

  const callback = ({index, action}) => {
    const {FIRST, SECOND, THIRD, FOURTH, FIFTH} = COACHMARK_STEPS

    if (action === moleculeCoachmarkActions.RESET) {
      setRunTour(false)
      setBadge(exampleBadge)
    }

    if (index === FIRST) {
      setShowProgress(true)
      setImage(exampleImage)
      setCloseIcon(<CloseIcon />)
      setActionButtons([...exampleActionButtons])
      setBadge(exampleBadge)
    }

    if (index === SECOND) {
      setShowProgress(false)
    }

    if (index === THIRD) {
      setImage(null)
      setActionButtons([exampleActionButtons[1]])
    }

    if (index === FOURTH) {
      setBadge(null)
    }

    if (index === FIFTH) {
      setCloseIcon(null)
    }
  }

  return (
    <Article>
      <H2>Default tooltip variants</H2>
      <Paragraph>
        The variants to set the configuration for the default tooltip
      </Paragraph>
      <Grid cols={5} gutter={[10, 10]}>
        <Cell className="sui-molecule-coachmark-step-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Cell>
        <Cell className="sui-molecule-coachmark-step-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Cell>
        <Cell className="sui-molecule-coachmark-step-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Cell>
        <Cell className="sui-molecule-coachmark-step-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Cell>
        <Cell className="sui-molecule-coachmark-step-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Cell>
      </Grid>

      <Paragraph>
        <AtomButton onClick={() => setRunTour(true)}>Run tour</AtomButton>
      </Paragraph>

      <MoleculeCoachmark
        run={runTour}
        tooltipOptions={{
          image,
          badge,
          closeIcon,
          actionButtons
        }}
        floaterProps={{
          disableAnimation: true
        }}
        disableOverlay={false}
        steps={COACHMARK_STEPS_CONTENT}
        scrollOffset={400}
        spotlightPadding={10}
        showProgress={showProgress}
        callback={callback}
      />
    </Article>
  )
}

export default ArticleDefaultTooltipVariants
