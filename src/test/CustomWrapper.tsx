import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import jobsReducer from 'features/jobs/jobsSlice'
import {RootState} from 'app/store'
import {MemoryRouter} from 'react-router-dom'

interface RenderProps {
  initialState: RootState
  renderOptions?: any
}

const render = (ui: React.ReactElement, props: RenderProps) => {
  const {initialState, renderOptions} = props
  function Wrapper({children}: {children: React.ReactNode}) {
    const store = configureStore({
      reducer: {
        jobs: jobsReducer,
      },
      preloadedState: initialState,
    })
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    )
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'
export {render}
