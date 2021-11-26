export function RepositoryItem(props) {
  return (
    <li>
      <strong>{ props.repository?.name ?? 'Repositório padrão' }</strong>
      <p>{ props.repository?.description }</p>
      <a href={props.repository?.link}>Acessar o repositório</a>
    </li>
  )
}