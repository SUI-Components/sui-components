import AtomInput, {inputSizes} from '../../../../components/atom/input/src'
import SuiButton from '@s-ui/react-atom-button'

import './styles.scss'

const field = {
  marginBottom: '16px'
}

const bankAccountMask = {
  mask: 'ES00 0000 0000 00 0000000000'
}

const logoLocation = 'https://image.flaticon.com/icons/svg/67/67347.svg'
const IconLocation = () => <img src={logoLocation} />

export default () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Input</h1>
      <div style={field}>
        <h4>Size MEDIUM</h4>
        <AtomInput
          size={inputSizes.MEDIUM}
          name="first"
          placeholder="Medium input"
        />
      </div>
      <div style={field}>
        <h4>Size SMALL</h4>
        <AtomInput
          size={inputSizes.SMALL}
          name="first"
          placeholder="Small input"
        />
      </div>
      <div style={field}>
        <h4>Size XSMALL</h4>
        <AtomInput
          size={inputSizes.XSMALL}
          name="first"
          placeholder="Extra Small input"
        />
      </div>
      <div style={field}>
        <h4>With placeholder</h4>
        <AtomInput name="second" placeholder="Medium Input" />
      </div>
      <div style={field}>
        <h4>With placeholder and value</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          value="Somewhere over the..."
        />
      </div>
      <div style={field}>
        <h4>Disabled</h4>
        <AtomInput
          name="disabled"
          placeholder="Medium Disabled Input"
          disabled
        />
      </div>
      <div style={field}>
        <h4>Read Only</h4>
        <AtomInput name="disabled" value="Medium Read Only Input" readOnly />
      </div>
      <div style={field}>
        <h4>Type: number</h4>
        <AtomInput
          type="number"
          name="number"
          placeholder="Number only input"
          charsSize={10}
        />
      </div>
      <div style={field}>
        <h4>Type: date</h4>
        <AtomInput type="date" name="date" charsSize={10} />
      </div>
      <div style={field}>
        <h4>With leftAddon and rightAddon</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          leftAddon="http://"
          rightAddon="@schibsted.com"
        />
      </div>
      <div style={field}>
        <h4>With leftIcon</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          leftIcon={<IconLocation />}
        />
      </div>
      <div style={field}>
        <h4>With leftIcon and rightAddon</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          leftIcon={<IconLocation />}
          rightAddon="Location"
        />
      </div>
      <div style={field}>
        <h4>With errorState=false</h4>
        <AtomInput
          name="second"
          placeholder="Success input"
          errorState={false}
        />
      </div>
      <div style={field}>
        <h4>With errorState=true</h4>
        <AtomInput name="second" placeholder="Error input" errorState />
      </div>
      <div style={field}>
        <h4>With state="success"</h4>
        <AtomInput name="second" placeholder="Success input" state="success" />
      </div>
      <div style={field}>
        <h4>With state="error"</h4>
        <AtomInput name="second" placeholder="Error input" state="error" />
      </div>
      <div style={field}>
        <h4>With state="alert"</h4>
        <AtomInput name="second" placeholder="Error input" state="alert" />
      </div>
      <div style={field}>
        <h4>Type: sui-password</h4>
        <AtomInput
          type="sui-password"
          name="password"
          placeholder="Password Input"
        />
      </div>
      <div style={field}>
        <h4>Type: mask</h4>
        <AtomInput
          type="mask"
          mask={bankAccountMask}
          placeholder="ES00 0000 0000 00 0000000000"
          charsSize={31}
        />
      </div>
      <div style={field}>
        <h4>With rightIcon</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          rightIcon={<IconLocation />}
        />
      </div>
      <div style={field}>
        <h4>With rightIcon and leftAddon</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          leftAddon="City"
          rightIcon={<IconLocation />}
        />
      </div>
      <div style={field}>
        <h4>With rightIcon & handler on it</h4>
        <AtomInput
          name="second"
          placeholder="Medium Input"
          rightIcon={<IconLocation />}
          onClickRightIcon={e => window.alert('clicked right icon')}
        />
      </div>

      <div style={field}>
        <h4>No border</h4>
        <AtomInput name="second" placeholder="Type something..." noBorder />
      </div>

      <div style={field}>
        <h4>onEnter</h4>
        <AtomInput
          name="on-enter-input"
          onEnter={(ev, {value, name}) => {
            ev.preventDefault()
            window.alert(JSON.stringify({[name]: value}))
          }}
        />
      </div>

      <div style={field}>
        <h4>onEnter on Tab</h4>
        <AtomInput
          name="on-tab-input"
          onEnter={(ev, {value, name}) => {
            ev.preventDefault()
            window.alert(JSON.stringify({[name]: value}))
          }}
          onEnterKey="Tab"
        />
      </div>
      <div style={field}>
        <h4>Inline Form</h4>
        <AtomInput
          name="inlineForm"
          placeholder="Inline Form"
          button={<SuiButton>Submit</SuiButton>}
        />
      </div>

      <div style={field}>
        <h4>Default value</h4>
        <AtomInput defaultValue="Default value" />
      </div>
    </div>
  </div>
)
