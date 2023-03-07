import { Link } from "react-router-dom";

export default function ContentLists({ userList, loadList }) {

    return (
        <ul className='listTable'>
            {
                userList.map(user =>
                    <li className="eachList" key={`sn${user.serialNum}`}>
                        <Link to="/" onClick={() => loadList(user)}>{user.serialNum}</Link>
                        <Link to="/" onClick={() => loadList(user)}>{user.subject}</Link>
                        <Link to="/" onClick={() => loadList(user)}>{user.userName}</Link>
                    </li>)
            }
        </ul>
    );
}