import React, { useEffect,useState }  from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
function LoginPage() {
  const dispatch = useDispatch();
  const [data,setData] = useState("")

  useEffect(()=>{
    const get = async () =>{
     const x =  await fetch('http://localhost:8080/data')
      const responseJson = await x.json()
      const test = responseJson.map((res)=> res.produksi)
      const test2 = test.map((res)=>({...res}))
      setData(...test2)
    } 
    get()
  },[])
  console.log(data.date)
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  }
 
  return (
    <>
    <h2>{data.date}</h2>
    <section className='login-page'>
      <h2>LOGIN</h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
    </section>

    </>
  );
}

 
export default LoginPage;