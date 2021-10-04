import Link from 'next/link';
import custom from '../../styles/Custom.module.css';

export const getStaticProps = async () => {
  const res =  await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { users: data }
  }
}


const Mirum = ({ users }) => {
    return (
      <div>
        <h1>All Mirum</h1>
        {users.map(user => (
          <Link href={'/mirum/' + user.id} key={user.id}>
            <a className={custom.single}>
              <h3>
                { user.name }
              </h3>
            </a>
          </Link>
        ))}
      </div>
    );
  }
   
  export default Mirum;