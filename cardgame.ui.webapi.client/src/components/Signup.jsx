import '../styles/Authentication.css';
import {Link} from 'react-router-dom';
function SignUp() {

    return (
        <>
         <div className="marquee">
                    <div className='track'>
                        <div className='content'>Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign up Sign in</div>
                    </div>
          </div>
        <div className="auth-con">
            <form>
                <div className='input-con'>
                    <input className='inputItem' type="text" name="username" placeholder="username"></input>
                    <input className='inputItem' type="text" name="email" placeholder="email"></input>
                    <input className='inputItem' type="text" name="password" placeholder="password"></input>
                </div>
                <div className='but-con'>
                    <Link to='/signin' className='authLink'>I already have account</Link>
                    <input id='authBut' type="submit" value="Sign in"></input>
                </div>
            </form>
        </div>
        </>
    );

}

export default SignUp;