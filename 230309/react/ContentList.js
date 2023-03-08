import { Link } from "react-router-dom";

export default function ContentLists({ userList, loadList }) {

    return (
        <ul className='listTable'>
            {
                userList.map((user,i) =>
                    <li className="eachList" key={`sn${user.serialNum}`}>
                        <Link to="/" onClick={() => loadList(user,i)}>{user.serialNum}</Link>
                        <Link to="/" onClick={() => loadList(user,i)}>{user.subject}</Link>
                        <Link to="/" onClick={() => loadList(user,i)}>{user.userName}</Link>
                    </li>)
            }
        </ul>
    );
}