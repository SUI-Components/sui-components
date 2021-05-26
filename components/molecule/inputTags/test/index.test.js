/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/inputTags', () => {
  const Component = MoleculeInputTags
  const setup = setupEnvironment(Component)

  describe('when the is disabled', () => {
    it('should be disabled', () => {
      const {queryByRole} = setup({disabled: true})

      const input = queryByRole('textbox')
      expect(input).to.be.null
    })
  })

  describe('when has placeholder', () => {
    it('should display the placeholder if no tags avaiable', () => {
      const placeholder = 'Type your favorite beetle'
      const {getByPlaceholderText} = setup({placeholder})

      expect(getByPlaceholderText(placeholder)).to.be.visible
    })

    it('should not display the placeholder after adding tags', async () => {
      const placeholder = 'Type your favorite beetle'

      const {queryByPlaceholderText} = setup({
        placeholder,
        tags: ['Lenon']
      })

      expect(queryByPlaceholderText(placeholder)).to.be.null
    })
  })

  describe('when has maxTags', () => {
    it('should allow add tags if max not reached', () => {
      const {getByRole} = setup({
        maxTags: 4,
        tags: []
      })
      expect(getByRole('textbox')).to.be.visible
    })

    it('should not allow add tags if max reached', () => {
      const {queryByRole} = setup({
        maxTags: 4,
        tags: ['Paul', 'John', 'Ringo', 'George']
      })
      expect(queryByRole('textbox')).to.be.null
    })
  })
})
