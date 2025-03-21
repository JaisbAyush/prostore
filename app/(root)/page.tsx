import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import {getProductList} from "@/lib/action/product_list";
const delay = (ms : any)=>{
    return new Promise((res)=> setInterval(res, ms));
}


const HomePage = async ()=>{
  await delay(2000);
  const itemList = await getProductList();
  console.log(itemList);
  return <>
          <ProductList data={itemList} title="New Arrivals" limit={4} />
  </>
}

export default HomePage;