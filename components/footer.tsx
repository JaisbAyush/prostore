import { NEXT_APP_NAME } from "@/lib/constant";
const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <footer className="border-t">
            <div className="p-5 flex-center">
                {year} {NEXT_APP_NAME}. All Right Reserved
            </div>
        </footer>
    )
}
export default Footer;