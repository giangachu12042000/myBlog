
import './styles.scss'
import Head from 'next/head';
import { withRouter } from 'next/router';
import MainPage from './Main';
import AdminPage from '../app/admin';
const Layout =(props)=> {
    const {router} = props;
    const isAdmin = router.pathname.includes('/admin'); 
    return(
        <div className="" >
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>My-Blog</title>
                <link href="/static/css/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            {isAdmin ? <AdminPage>{props.children}</AdminPage> : <MainPage >{props.children}</MainPage> }
        </div>
    )
}

export default withRouter(Layout) 