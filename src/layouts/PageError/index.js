import React, { PropTypes } from "react"
import Page from "../Page"
import Button from "../../components/Button"
import styles from "./index.css"
import { getFromContext as get } from "../../i18n/get"

const oldPosts = [
  'certificacao-microsoft-70-480-programming-in-html5-with-javascript-and-css3',
  'certificacao-microsoft-70-486-developing-asp-net-mvc-web-applications',
  'certificacao-microsoft-70-487-developing-microsoft-azure-and-web-services',
  'certificacao-microsoft-70-487-objetivo-1-1-choose-data-access-technologies',
  'certificacao-microsoft-70-487-objetivo-1-1-choose-data-access-technologies-parte-2-entity-framework',
  'certificacao-microsoft-70-487-objetivo-1-2-implement-caching',
  'certificacao-microsoft-70-487-objetivo-1-3-implement-transactions',
  'certificacao-microsoft-70-487-objetivo-1-4-implement-data-storage-in-windows-azure',
  'certificacao-microsoft-70-487-objetivo-1-5-create-and-implement-wcf-data-services-service',
  'certificacao-microsoft-70-487-objetivo-1-6-manipulate-xml-data-structures',
  'certificacao-microsoft-70-487-objetivo-2-1-query-and-manipulate-data-by-using-the-entity-framework',
  'certificacao-microsoft-70-487-objetivo-2-2-query-and-manipulate-data-by-using-data-provider-for-entity-framework',
  'certificacao-microsoft-70-487-objetivo-2-3-query-data-by-using-linq-to-entities',
  'certificacao-microsoft-70-487-objetivo-2-4-query-and-manipulate-data-by-using-ado-net',
  'certificacao-microsoft-70-487-objetivo-2-5-create-an-entity-framework-data-model',
  'certificacao-microsoft-70-487-objetivo-3-1-create-a-wcf-service',
  'certificacao-microsoft-70-487-objetivo-3-2-configure-wcf-services-by-using-configuration-settings',
  'certificacao-microsoft-70-487-objetivo-3-3-configure-wcf-services-by-using-the-api',
  'certificacao-microsoft-70-487-objetivo-3-4-secure-a-wcf-service',
  'certificacao-microsoft-70-487-objetivo-3-5-consume-wcf-services',
  'certificacao-microsoft-70-487-objetivo-3-6-version-a-wcf-service',
  'certificacao-microsoft-70-487-objetivo-3-7-create-and-configure-a-wcf-service-on-windows-azure',
  'certificacao-microsoft-70-487-objetivo-3-8-implement-messaging-patterns',
  'certificacao-microsoft-70-487-objetivo-3-9-host-and-manage-services',
  'certificacao-microsoft-70-487-objetivo-4-1-design-a-web-api',
  'certificacao-microsoft-70-487-objetivo-4-2-implement-a-web-api',
  'certificacao-microsoft-70-487-objetivo-4-3-secure-a-web-api',
  'certificacao-microsoft-70-487-objetivo-4-4-host-and-manage-a-web-api',
  'certificacao-microsoft-70-487-objetivo-4-5-consume-web-api-web-services',
  'certificacao-microsoft-70-487-objetivo-5-1-design-a-deployment-strategy',
  'certificacao-microsoft-70-487-objetivo-5-2-choose-a-deployment-strategy-for-a-windows-azure-web-application',
  'certificacao-microsoft-70-487-objetivo-5-3-configure-a-web-application-for-deployment',
  'certificacao-microsoft-70-487-objetivo-5-4-manage-packages-by-using-nuget',
  'certificacao-microsoft-70-487-objetivo-5-5-create-configure-and-publish-a-web-package',
  'certificacao-microsoft-70-487-objetivo-5-6-share-assemblies-between-multiple-applications-and-servers',
  'certificacao-microsoft-70-487-resultado',
  'certificao-microsoft-70-487-objetivo-1-1-choose-data-access-technologies-parte-3-wcf-data-services',
  'como-aprender-ingles-e-por-que-e-tao-importante-para-sua-carreira',
  'como-conseguir-um-estagio',
  'descomplicando-a-carreira-de-programador',
  'em-qual-faculdade-estudar',
  'esteja-um-passo-a-frente-nos-estudos',
  'migrando-um-projeto-asp-net-core-rc-1-para-rc-2',
  'minha-trajetoria-profissional',
  'novo-desafio-lambda3',
  'os-rascunhos-da-sua-carreira-ensino-medio-e-ensino-tecnico',
  'qual-curso-escolher',
  'qual-e-a-melhor-habilidade-que-um-programador-pode-ter'
]

const PageError = ({ error, errorText }, context) => {
  const { error404Title, error404Message } = get(context)

  const post = context.location.pathname.replace(/\//g, '')
  if (oldPosts.includes(post))
    window.location.href = `https://edneypitta.github.io/old-blog/${post}`

  return (
    <Page head={{ title: error404Title }}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={`${styles.title} ${styles.oops}`}>
            <strong>{error}</strong>
            {" "}
            {error404Title}
          </p>
          {
            error === 404 &&
            <div className={styles.description}>
              {error404Message.split("\\n").map(text => <div key={text}>{text}</div>)}
            </div>
          }
        </div>
      </div>
      <div className={styles.actions}>
        <Button to={"mailto:eu@chicocode.io"}>
          {"Reportar"}
        </Button>
      </div>
    </Page>)
}

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

PageError.contextTypes = {
  location: PropTypes.object.isRequired,
  metadata: PropTypes.object.isRequired
}


export default PageError
