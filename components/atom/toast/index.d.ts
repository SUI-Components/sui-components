import type {FC} from 'react'

import type {RenderOptions, RenderResult} from '@testing-library/react'

interface SetupEnvironmentOptions extends RenderOptions {
  contexts: unknown[]
}

declare global {
  const setupEnvironment: <T>(
    Component: FC<T>,
    {contexts, hydrate, queries, wrapper}?: SetupEnvironmentOptions
  ) => (props: {[k: string]: unknown}) => RenderResult
}
