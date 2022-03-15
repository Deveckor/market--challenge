
import  CardProduct  from "../componets/ProductsSection";
import Greeting from "../componets/Greetin";
import Categories from "../componets/CategoriesSection";


function Home(props) {

    const {addCart} = props;
    
    
    return(
        
      
        
        <>

        <Greeting
        name="Héctor"
        />
        <Categories/>
        <section className="d-flex justify-content-around gap-4 m-4">

        <CardProduct
        addCart={addCart}
        />
        
        </section>
    
        </>
    )
}

export default Home;