import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout(): JSX.Element {
return (
<div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">
    <AdminSidebar />
    <main className="flex-1 p-8 ml250px">
        <Outlet />
    </main>
    </div>
    {/* <Footer /> */}
</div>
);
}