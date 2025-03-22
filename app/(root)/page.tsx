import ProductList from "@/components/shared/product/product-list";
import {getProductList} from "@/lib/action/product_list";
const delay = (ms : number)=>{
    return new Promise((res)=> setInterval(res, ms));
}


const HomePage = async ()=>{
  await delay(2000);
  const itemList = await getProductList();
  return <>
          <ProductList data={itemList} title="New Arrivals" limit={4} />
  </>
}

export default HomePage;