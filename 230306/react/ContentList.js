import { Link } from "react-router-dom";


export default function ContentLists({ userList,tmp1 }) {
    
    return(
        <ul className='listTable'>
            {
                userList.map(user => <li className="eachList" key={`sn${user.serialNum}`}>
                    <Link to="/" onClick={()=>tmp1(user)} >{user.serialNum}</Link>
                    <Link to="/" onClick={()=>tmp1(user)}>{user.subject}</Link>
                    <Link to="/" onClick={()=>tmp1(user)} >{user.userName}</Link>
                </li>)
            }
        </ul>
    );
}