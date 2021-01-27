import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import '../styles/globals.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
