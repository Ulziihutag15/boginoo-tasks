import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 text-center normal'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input placeholder='https://www.web-huudas.mn' className = 'h-5 w-8 br-secondary-2'/>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' disabled={true}>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}