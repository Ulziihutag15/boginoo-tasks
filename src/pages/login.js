import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router';

const Login = (props) => {
    let { children, disabled, className, ...others } = props;

    const hist = useHistory()
    return (

        <Layout>
            
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 text-center normal'>
                    Boginoo Login
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>

                    <div className = 'flex-row'>
                    <div className = 'font-ubuntu fs-20 lh-23 bold c-primary mr-3'>Цахим Хаяг</div>   
                    <Input placeholder='Email' className = 'h-5 w-8 br-secondary-2'/>
                    </div> 

                    <div className = 'flex-row mt-4'>
                    <div className = 'font-ubuntu fs-20 lh-23 bold c-primary mr-3'>Нууц үг</div>
                    <Input placeholder='Password' className = 'h-5 w-8 br-secondary-2'/>
                    </div> 

                    <div className = 'flex-row'>
                    <div className = 'bb mt-4 mr-6 c-primary pointer' onClick = {() => hist.push('/register')}>Бүртгүүлэх</div>
                    <div className = 'bb mt-4 c-primary pointer'>Нууц үгээ мартсан уу?</div>
                    </div>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default b-primary h-5 ph-4 mt-4 pointer'>Нэвтрэх</Button>
                </div>
            </div>
        </Layout>
    )
}

export default Login;