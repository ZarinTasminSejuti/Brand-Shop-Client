
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className='mx-auto max-w-[1440px]'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;