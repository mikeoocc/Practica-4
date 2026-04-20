'use client'

import "./Paginacion.css"

type Props = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    pages?: number,
    next?: number | null,
    prev?: number | null
}

const Paginacion = ({page, setPage, pages, next, prev}: Props) => {

    return (
        <div className="contenedorPagina">
            {prev && <button onClick={() => setPage(page-1)}>Prev</button>}
            <p>Página {page} / {pages}</p>
            {next && <button onClick={() => setPage(page+1)}>Next</button>}
        </div>
    )

}

export default Paginacion