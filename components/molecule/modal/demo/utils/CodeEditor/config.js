export const viewsIndex = {
  0: {
    name: 'codeView',
    settings: {
      codeView: true,
      previewView: false
    }
  },
  1: {
    name: 'bothView',
    settings: {
      codeView: true,
      previewView: true
    }
  },
  2: {
    name: 'previewView',
    settings: {
      codeView: false,
      previewView: true
    }
  }
}

export const getViewIndex = ({codeView, previewView}) => {
  if (codeView && previewView) {
    return 1
  }
  if (codeView) {
    return 0
  }
  if (previewView) {
    return 2
  }
  return -1
}
