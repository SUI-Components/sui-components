import * as DOC from '@s-ui/documentation-library'

const docName = 'DOC'

;((condition, name) => {
  if (condition) {
    window[name] = DOC
  }
})(window[docName] === undefined, docName)
