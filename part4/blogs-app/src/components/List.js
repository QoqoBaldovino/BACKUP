const List = ({blogs}) => {
  return ( 
    <div className="container list-group w-auto">
      {blogs.length === 0 ? 
      <h1>No hay blogs para mostrar.</h1> :
      <h1>Hay blogs cargados.</h1>}
      {console.log(blogs)}
    </div>
  )
}

export default List