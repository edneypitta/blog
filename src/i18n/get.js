import getLang, {getLangContext} from "./getLang"

export default (props, context) =>
  context.metadata.i18n[getLang(props, context)]

export const getFromContext = context =>
    context.metadata.i18n[getLangContext(context)]
