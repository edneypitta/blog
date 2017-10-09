import invariant from "invariant"

export default function getLang({ location }, { metadata: { i18n } }) {
  invariant(location, "'location' is required from the props or context")
  invariant(i18n, "'metadata.i18n' is required from the context")

  return 'en'
}

export function getLangContext(context) {
  return getLang(context, context)
}
