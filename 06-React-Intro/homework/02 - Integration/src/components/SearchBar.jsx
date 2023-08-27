export default function SearchBar({onSearch}) {
   // const {onSearch} = props

   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
