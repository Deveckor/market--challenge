
import  CardProduct  from "../componets/CardProduct";


import Greeting from "../componets/Greetin";
import Categories from "../componets/Categories";


function Home() {
    
    return(
        
      
        
        <>

        <Greeting
        name="Héctor"
        />
        <Categories/>
        <section className="d-flex justify-content-around gap-4 m-4">

        <CardProduct
        src='https://cdn1.coppel.com/images/catalog/pr/2077052-1.jpg'
        title="Pantalón Guess Juvenil"
        price="$589"
        />
        <CardProduct
        src='https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-montana-y-trekking-viaje-forclaz-100-hombre-gris.jpg?&f=452x452'
        title="LEE Jeans para Hombre."
        price="$749"
        />
        <CardProduct
        src='https://cdn.shopify.com/s/files/1/0123/4577/0041/products/PANT-DENIM_1024x1024.jpg?v=1616024564'
        title="Pantalón de Mezclilla"
        price="$306"
        />
        
        </section>
    
        </>
    )
}

export default Home;