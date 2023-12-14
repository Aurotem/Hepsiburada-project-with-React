import Product from "./Product";
import product from "../../assets/data";

  export default function Products( { parameter = '' }) {

    function productGenerator(productArr,parameter) {
    
        let arr = [];
        productArr.forEach((e,i) => {
            if((e.title).toLowerCase().includes(parameter.toLowerCase()) || (e.brand).toLowerCase().includes(parameter.toLowerCase())) {
            arr.push(<Product key={'product:'+ e.title} product={e} productIndex={i}/>)
            } else {
                return <h1 className="text-center font-bold text-2xl text-stone-800 dark:text-stone-200">Bir şey bulamadık :/</h1>
            }
        });
        return arr
    }
    return (<>
<div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols:2 sm:grid-cols-2 2xl:grid-cols-6 justify-items-center px-12">

{productGenerator(product['products'], parameter)}

</div>
<p className="text-stone-800 dark:text-stone-200 text-center w-full ">Sayfanın sonuna geldiniz.</p>
</>
    )
  }
