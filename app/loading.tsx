import Image from "next/image";
import Loader from '@/assets/loader.gif';


const Loading = ()=>{

    return <div
            style={{
                display :'flex',
                justifyContent : 'center',
                alignItems : 'center',
                height : '100vh',
                width : '100vh'
            }}
        >
        <Image src={Loader} alt="Loader" height={140} width={140} />
    </div>
}
export default Loading;