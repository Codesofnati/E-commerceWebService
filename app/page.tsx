import { redirect } from 'next/navigation';
import LandingPage from './components/LandingPage';

export default function Home() {
 redirect('/product');
 /*return (
 // <LandingPage/>
 )*/

}
