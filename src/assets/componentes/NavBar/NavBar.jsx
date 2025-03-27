import CarWidget from '../CarWidget/CarWidget'


const NavBar = () => {
    return (
        <>
            <header>
                <h2>Toy.Store</h2>
                
                <nav>
                    <ul>
                        <li>Todo</li>
                        <li>Figuras</li>
                        <li>Colecciones</li>
                        <li>Accesorios</li>
                    </ul>
                </nav>
                <CarWidget />
            </header>
        </>
    )
}
  export default NavBar