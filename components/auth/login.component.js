import MainLayout from '../../components/layouts/main.components'
import { NextSeo } from 'next-seo';
import { withRouter } from 'next/router'
import Link from "next/link"

const Login = ( { router } )  => {
  return (
    <MainLayout>
        <NextSeo
            title="Login"
            description="Login"
            canonical={process.env.SITE_URL+ router.pathname}
            openGraph={{
            url: process.env.SITE_URL+ router.pathname,
            title: 'Login',
            description: 'Login'                
            }}              
        />   

        <section className="page-header">
            <div className="container-xl">
                <div className="text-center">
                <h1 className="mt-0 mb-2">Login</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Login</li>
                    </ol>
                </nav>
                </div>
            </div>
        </section>

        <section className="main-content main-content-auth">
            <div className="container-xl">                
                <div className="spacer" data-height={50} />
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="section-header">
                            <h3 className="section-title">Account Login</h3>
                            <p className="m-0">Welcome back!</p>
                            <img src="/images/wave.svg" className="wave" alt="wave" />
                        </div>
                        <form method="post">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email address" required="required" />
                            </div>
                            <div className="form-group">
                                <label>Password </label>
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
                            </div>
                            <button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default pull-right">Login</button>
                        </form>
                        <hr/>
                        <div className="col-md-12">
                            <p className="m-0"><Link href="/">Forgot Password?</Link></p>
                            <p className="m-0"><Link href="/auth/signup">Create New Account</Link></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    </MainLayout>
  )
}

export default withRouter(Login);  