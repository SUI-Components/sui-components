import React from 'react'
import AtomTag, {
  atomTagDesigns,
  atomTagSizes
} from '../../../../components/atom/tag/src'
import {CloseIcon, Icon} from './icons'

export default () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1 className="sui-Studio-h1">Tag</h1>
      <p className="sui-Studio-h4">
        We use tags to visually emphasise features of the UI and make
        recognition and interaction easier.
      </p>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Size</h2>
        <p className="sui-Studio-p">
          Tags structure can have 3 main sizes: Small, medium{' '}
          <small>(default)</small> and large. You can use this prop{' '}
          <code className="sui-Studio-code">size</code> to modify it.
        </p>
        <table>
          <tr>
            <td className="sui-Studio-label">Small</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.SMALL} />
              <AtomTag
                design={atomTagDesigns.OUTLINE}
                label="Tag Outline"
                size={atomTagSizes.SMALL}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.SMALL}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.SMALL}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.SMALL}
              />
            </td>
          </tr>
          <tr>
            <td className="sui-Studio-label">Medium</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.MEDIUM} />
              <AtomTag
                design={atomTagDesigns.OUTLINE}
                label="Tag Outline"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.MEDIUM}
              />
            </td>
          </tr>
          <tr>
            <td className="sui-Studio-label">Large</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.LARGE} />
              <AtomTag
                design={atomTagDesigns.OUTLINE}
                label="Tag Outline"
                size={atomTagSizes.LARGE}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.LARGE}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.LARGE}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.LARGE}
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Design</h2>
        <p className="sui-Studio-p">
          Tags structure can have 2 designs: Solid <small>(default)</small> and
          outline. You can use this prop{' '}
          <code className="sui-Studio-code">design</code> to modify it.
        </p>
        <table>
          <tr>
            <td className="sui-Studio-label">Solid</td>
            <td>
              <AtomTag label="Tag Structure" size={atomTagSizes.MEDIUM} />
              <AtomTag
                closeIcon={<CloseIcon />}
                label="Close Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.MEDIUM}
              />
            </td>
          </tr>
          <tr>
            <td className="sui-Studio-label">Outline</td>
            <td>
              <AtomTag
                design={atomTagDesigns.OUTLINE}
                label="Tag Structure"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                design={atomTagDesigns.OUTLINE}
                label="Close Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                design={atomTagDesigns.OUTLINE}
                icon={<Icon />}
                label="Icon Tag"
                size={atomTagSizes.MEDIUM}
              />
              <AtomTag
                closeIcon={<CloseIcon />}
                design={atomTagDesigns.OUTLINE}
                icon={<Icon />}
                label="Icon & Close Tag"
                size={atomTagSizes.MEDIUM}
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Actionable</h2>
        <p className="sui-Studio-p">
          Actionable tags can be used as an anchor. Same as{' '}
          <code className="sui-Studio-code">{'<a>'}</code> to define an
          interactivity with the component.
        </p>
        <div>
          <AtomTag
            label="Navigation Tag"
            onClick={() => window.alert('click!')}
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            label="Anchor Tag"
            target="_blank"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
            target="_blank"
          />
        </div>
        <p className="sui-Studio-p">___</p>
        <p className="sui-Studio-p">
          With <code className="sui-Studio-code">outline</code> design.
        </p>
        <div>
          <AtomTag
            design={atomTagDesigns.OUTLINE}
            label="Navigation Tag"
            onClick={() => window.alert('click!')}
          />
          <AtomTag
            design={atomTagDesigns.OUTLINE}
            href="https://sui-components.now.sh/"
            label="Anchor Tag"
            target="_blank"
          />
          <AtomTag
            design={atomTagDesigns.OUTLINE}
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
          <AtomTag
            design={atomTagDesigns.OUTLINE}
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
            target="_blank"
          />
        </div>
      </div>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Icons</h2>
        <p className="sui-Studio-p">
          Tags can include an action icon (generally a close icon). This icon
          will always be located to the right of content. You can add use the{' '}
          <code className="sui-Studio-code">icon</code> and{' '}
          <code className="sui-Studio-code">closeIcon</code> to added a icon.
        </p>
        <div>
          <AtomTag
            icon={<Icon />}
            iconPlacement="left"
            label="Icon placement left"
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            target="_blank"
          />
        </div>
        <ul className="sui-Studio-ul">
          <li>
            <b>Icons are optional</b> and can be placed either on the right or
            the left side, but never on both at the same time.
          </li>
          <li>
            Only actionable tags can have{' '}
            <code className="sui-Studio-code">iconPlacement="right"</code>.
          </li>
        </ul>
        <p className="sui-Studio-p">___</p>
        <p className="sui-Studio-p">
          You can use a handler through the property with prop{' '}
          <code className="sui-Studio-code">onClose</code> to add event handler.
        </p>
        <AtomTag
          closeIcon={<CloseIcon />}
          label="Close Tag"
          onClose={() => window.alert('close!')}
          responsive
        />
      </div>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Responsive</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">responsive</code> true for
          make responsive layout. keep large size in mobile.
        </p>
        <div>
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
            size={atomTagSizes.SMALL}
          />
          <AtomTag
            href="https://sui-components.now.sh/"
            icon={<Icon />}
            iconPlacement="right"
            label="Icon placement right"
            responsive
            target="_blank"
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
          />
          <AtomTag
            closeIcon={<CloseIcon />}
            icon={<Icon />}
            label="Icon & Close Tag"
            onClose={() => window.alert('close!')}
            responsive
            size={atomTagSizes.LARGE}
          />
        </div>
      </div>
      <div className="sui-Studio-wrapper--light">
        <h2 className="sui-Studio-h2">Types</h2>
        <p className="sui-Studio-p">
          Use the <code className="sui-Studio-code">type</code> in order to
          color it as desired from a high order component.
        </p>
        <div>
          <AtomTag label="Sale" type="warning" />
          <AtomTag label="Special" type="special" />
          <AtomTag label="5 min ago" type="date" />
        </div>
      </div>
    </div>
  </div>
)
