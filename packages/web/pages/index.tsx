import { NextSeo } from 'next-seo'
import { MainPage } from '../src/pages/main'

export default function Page(): React.ReactElement {
  return (
    <>
      <NextSeo title="Main" />
      <MainPage />
    </>
  )
}
