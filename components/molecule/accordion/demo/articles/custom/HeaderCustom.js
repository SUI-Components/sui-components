import cx from 'classnames'
import PropTypes from 'prop-types'

import {AntDesignIcon, Cell, Grid} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'
import AtomTag, {atomTagSizes} from '@s-ui/react-atom-tag'

import {MoleculeAccordionItemHeaderIcon} from '../../../src/index.js'

const HeaderCustom = ({
  className,
  animationDuration,
  tags = {},
  onClose,
  title,
  isExpanded,
  step
}) => {
  const closeHandler = (event, {value}) => {
    event.preventDefault()
    typeof onClose === 'function' && onClose(event, {[value]: ''}, step)
  }
  return (
    <div
      className={cx('demo-header-custom', className)}
      style={{width: '100%'}}
    >
      <Grid cols={4} gutter={[8, 8]}>
        <Cell span={1} style={{margin: '0 8px'}}>
          {title}
        </Cell>
        <Cell
          span={3}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 8
          }}
        >
          {!isExpanded &&
            Object.entries(tags).map(
              ([tagKey, tagValue], index) =>
                tagValue !== '' && (
                  <AtomTag
                    key={index}
                    size={atomTagSizes.SMALL}
                    label={`${tagKey}: ${tagValue}`}
                    value={tagKey}
                    closeIcon={
                      <AtomIcon>
                        <AntDesignIcon icon="AiOutlineClose" />
                      </AtomIcon>
                    }
                    onClose={closeHandler}
                    isFitted
                  />
                )
            )}
          <MoleculeAccordionItemHeaderIcon
            isExpanded={isExpanded}
            animationDuration={animationDuration}
          />
        </Cell>
      </Grid>
    </div>
  )
}

HeaderCustom.displayName = 'HeaderCustom'
HeaderCustom.propTypes = {
  animationDuration: PropTypes.number,
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func,
  title: PropTypes.string,
  isExpanded: PropTypes.bool,
  step: PropTypes.number
}

export default HeaderCustom
