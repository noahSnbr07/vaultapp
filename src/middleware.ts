import { NextResponse } from 'next/server';
import type { MiddlewareConfig, NextRequest } from 'next/server';

export async function middleware(request: NextRequest): Promise<NextResponse> {


    //redirect user to index
    return NextResponse.redirect(new URL('/', request.url));
}

export const config: MiddlewareConfig = {

    matcher: ['/dashboard'],
}