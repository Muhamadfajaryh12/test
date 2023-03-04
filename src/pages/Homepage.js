import React, { useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import AddButton from '../components/AddButton';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import TestList from '../components/TestList';
function HomePage() {
  const [data,setData] = useState("")
  useEffect(()=>{
    const get = async () =>{
     const x =  await fetch('http://localhost:8080/data')
      const responseJson = await x.json()
      const test = responseJson.map((res)=> res.produksi)
      const test2 = test.map((res)=>res)
      setData(...test2)
    } 
    get()
  },[])
  console.log(data)
  const { threads = [],users = [], authUser,test = [] } = useSelector((states) => states);
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);
  console.log(users);
  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));
  console.log(threadList);    
  return (
    <>
      <div className="content-forum">
        <ThreadList threads={threadList} />
      </div>
      <TestList test={data}/>
      <AddButton />
    </>
  );
}
export default HomePage;
