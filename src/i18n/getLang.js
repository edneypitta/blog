import invariant from "invariant"

export default function getLang({ location }, {metadata: { i18n }}) {
  invariant(location, "'location' is required from the props or context")
  invariant(i18n, "'metadata.i18n' is required from the context")

  const firstURIlevel = location.pathname.replace(/^\//, "").split("/")[0]
  return i18n[firstURIlevel] ? firstURIlevel : "pt-br"
}

export function getLangContext(context) {
  return getLang(context, context)
}
