import type {FunctionComponent} from 'react'

import type {RenderOptions, RenderResult} from '@testing-library/react'

interface SetupEnvironmentOptions extends RenderOptions {
  contexts: unknown[]
}

declare global {
  interface Window {
    setupEnvironment: (
      Component: FunctionComponent,
      {contexts = [], hydrate, queries, wrapper}: SetupEnvironmentOptions = {}
    ) => () => RenderResult
  }
}
declare namespace window {}
