function EachList({userList}) {
    return (
        <li className="eachList">
            <div>{userList.serialNum}</div>
            <div>{userList.subject}</div>
            <div>{userList.userName}</div>
        </li>
    );
}

export default function ContentLists({ userList }) {
    const gridList = new Array(userList.length)

    for (let i = 0; i < userList.length; i++) {
        gridList[i] = <EachList
            userList={userList[userList.length - 1 - i]}
            key={`sn${i}`}
        />
            
    }
    return(
        <ul className='listTable'>
            {gridList}
        </ul>
    );
}