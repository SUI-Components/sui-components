/* eslint-disable no-console */
import {useRef} from 'react'
import './index.scss'

import MoleculeInputTags, {
  inputSizes
} from '../../../../components/molecule/inputTags/src'

import {withStateValueTags} from '@s-ui/hoc'
import {CloseIcon} from './icons'
import {beatles, ledZeppelin, queen, beatlesArrayObject} from './data'

const BASE_CLASS_DEMO = 'DemoMoleculeInputTags'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MoleculeInputTagsWithState = withStateValueTags(MoleculeInputTags)

const Demo = () => {
  const basicInputEl = useRef()
  const tabPressInputEl = useRef()
  const commaPressInputEl = useRef()
  const withSizeSmallInputEl = useRef()
  const withErrorInputEl = useRef()
  const withOnChangeHandlerInputEl = useRef()

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Input tags</h1>
        <p>
          Check the console to verify the <code>onChangeTags</code> on
          adding/removing tabs
        </p>
        <div className={CLASS_DEMO_SECTION}>
          <h4>Basic</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            value="George Martin"
            tagsCloseIcon={<CloseIcon />}
            tags={beatles}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={basicInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>Entering tags on "Tab" press</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles2"
            value="George Martin"
            tagsCloseIcon={<CloseIcon />}
            tags={beatles}
            onEnterKey="Tab"
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={tabPressInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>Entering tags on "comma" press</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles3"
            value="George Martin"
            tagsCloseIcon={<CloseIcon />}
            tags={beatles}
            onEnterKey=","
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={commaPressInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>With size=SMALL</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles4"
            tagsCloseIcon={<CloseIcon />}
            tags={ledZeppelin}
            size={inputSizes.SMALL}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={withSizeSmallInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>With error</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles5"
            tagsCloseIcon={<CloseIcon />}
            tags={queen}
            errorState
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={withErrorInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>With onChange handler</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles6"
            tagsCloseIcon={<CloseIcon />}
            tags={queen}
            onChange={(_, valuesToPropagate) => {
              const {name, value} = valuesToPropagate
              console.log({[`onChange___${name}`]: value})
            }}
            onChangeTags={(_, valuesToPropagate) => {
              const {name, tags} = valuesToPropagate
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={withOnChangeHandlerInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>with no initial values and placeHolderText</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            placeholder="Type something..."
            innerRefInput={basicInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>with no initial values and no placeHolderText</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            innerRefInput={basicInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>with maxTags value = 5</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            maxTags={5}
            tags={beatles}
            value="George Martin"
            placeHolderText="Placeholder text"
            innerRefInput={basicInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>with maxTags value smaller than initial values</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            maxTags={1}
            tags={beatles}
            value="George Martin"
            placeHolderText="Placeholder text"
            innerRefInput={basicInputEl}
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>with disabled prop</h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            maxTags={5}
            tags={beatles}
            value="George Martin"
            placeHolderText="Placeholder text"
            innerRefInput={basicInputEl}
            disabled
          />
        </div>
        <div className={CLASS_DEMO_SECTION}>
          <h4>with allowDuplicates = false </h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatles1"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            maxTags={5}
            tags={beatles}
            value="George Martin"
            placeHolderText="Placeholder text"
            innerRefInput={basicInputEl}
            allowDuplicates={false}
          />
        </div>

        <div className={CLASS_DEMO_SECTION}>
          <h4>with allowDuplicates = false and array of object </h4>
          <MoleculeInputTagsWithState
            name="inputTagsBeatlesArrayObject"
            tagsCloseIcon={<CloseIcon />}
            onChangeTags={(_, {tags, name}) => {
              console.log({[`onChangeTags___${name}`]: tags})
            }}
            tags={beatlesArrayObject}
            value=""
            placeHolderText="Placeholder text"
            innerRefInput={basicInputEl}
            allowDuplicates={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Demo
