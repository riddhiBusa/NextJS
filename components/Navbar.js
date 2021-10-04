import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/Mirum-logo.jpg" width={120} height={80} alt="Mirum"/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/mirum/"><a>Mirum List</a></Link>
        </nav>
    );
}
 
export default Navbar;