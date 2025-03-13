import Wrapper from '@/components/custom/wrapper';
import { redirect } from 'next/navigation';
import React from 'react';
import ContentSection from '../components/content/content-section';
import FillerSection from '../components/filler/filler-section';

export default async function page({ params }: { params: { method: "login" | "register" } }) {

    //retrieve params
    const { method } = await params;

    //check for invalid method
    const invalidParameter: boolean =
        !(method === "login" || method === "register");
    if (invalidParameter) redirect("/not-found");


    return (
        <Wrapper
            mainFullWidth
            className='flex flex-row'
            sidebarHidden
            headerHidden>
            <FillerSection />
            <ContentSection value={method} />
        </Wrapper>
    );
}