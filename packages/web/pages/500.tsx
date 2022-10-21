import { NextSeo } from 'next-seo'
import { ErrorPage } from '../src/pages/error'

export default (): React.ReactElement => {
  return (
    <>
      <NextSeo title="Em manutenção" />
      <ErrorPage />
    </>
  )
}
