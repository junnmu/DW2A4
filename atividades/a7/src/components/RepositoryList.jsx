import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
  name: "DW2A4",
  description: "Repo da disciplina de DW2A4 do IFSP",
  link: "https://github.com/junnmu/DW2A4"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}