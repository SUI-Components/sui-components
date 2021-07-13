import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Input,
  AntDesignIcon,
  RadioButton,
  RadioButtonGroup,
  Paragraph,
  Code
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import MoleculeAvatar from '../src/index'

const ArticleImage = ({className}) => {
  const [src, setSrc] = useState(
    'https://randomuser.me/api/portraits/men/1.jpg'
  )
  const [fallbackIcon, setFallbackIcon] = useState()
  return (
    <Article className={className}>
      <H2>Image</H2>
      <Paragraph>
        The image shown can be provided using the <Code>src</Code> prop.
      </Paragraph>
      <Input
        value={src}
        onChange={event => {
          setSrc(event.target.value)
        }}
        placeholder="image"
        fullWidth
      />
      <br />
      <br />
      <MoleculeAvatar
        src={src}
        fallbackIcon={
          fallbackIcon ? (
            <AtomIcon>
              <AntDesignIcon icon={fallbackIcon} />
            </AtomIcon>
          ) : (
            undefined
          )
        }
      />
      <H2>FallbackIcon</H2>
      <Paragraph>
        If the provided image fails on loading, the avatar will display the
        buddy icon by default. You can also customize the icon displayed using
        the <Code>fallbackIcon</Code> (react.node) prop.
      </Paragraph>
      <RadioButtonGroup
        value={fallbackIcon}
        onChange={(ev, value) => {
          setFallbackIcon(value)
        }}
        fullWidth
      >
        {[
          'AiOutlineMeh',
          'AiFillThunderbolt',
          'AiOutlineFrown',
          'AiFillApple',
          'AiFillBug',
          'AiFillBell',
          'AiFillPlusCircle',
          'AiFillStar',
          'AiFillTrophy'
        ].map(iconValue => (
          <RadioButton
            key={iconValue}
            value={iconValue}
            label={
              <AtomIcon>
                <AntDesignIcon
                  icon={iconValue}
                  style={{color: 'currentColor'}}
                />
              </AtomIcon>
            }
          />
        ))}
      </RadioButtonGroup>
      <br />
      <MoleculeAvatar
        fallbackIcon={
          fallbackIcon ? (
            <AtomIcon>
              <AntDesignIcon
                icon={fallbackIcon}
                style={{color: 'currentColor'}}
              />
            </AtomIcon>
          ) : (
            undefined
          )
        }
      />
    </Article>
  )
}

ArticleImage.propTypes = {
  className: PropTypes.string
}

export default ArticleImage
