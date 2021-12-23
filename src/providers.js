import React from 'react'
import App from './App'
import { GlobalStyle } from './style/global'
import GithubProvider from './providers/github-provider'

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <App />
      </GithubProvider>
    </main>
  )
}

export default Providers
