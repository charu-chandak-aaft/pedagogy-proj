import styles from './My.module.css';
export default function Button() {
  return (
    <div className="text-center">
    <button className="text-[#ff0000] bg-[#ffffff] p-2 w-50 rounded-[5] cursor-pointer hover:bg-[#ff0000] hover:text-[#ffffff] ">Click Me</button>
    <div className='p-5 mt-2 w-100 mx-auto bg-[#000aaaaa]'><h1 className={styles.xyz}>My CSS</h1></div>
    </div>
    
  );
}