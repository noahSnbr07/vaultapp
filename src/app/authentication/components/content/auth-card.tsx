"use server";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Form from "next/form";
import createUser from "../../server/create-user";

export default async function AuthCard({ value }: { value: string }) {

    return (
        <Form
            className="flex flex-col gap-4 w-[300px]"
            action={createUser}
        >
            <Tabs
                defaultValue={value}
                className="w-full"
            >
                <TabsList className="w-full">
                    <TabsTrigger value="login">
                        <Link
                            className="w-full"
                            href={"/authentication/login"}> Login </Link>
                    </TabsTrigger>
                    <TabsTrigger value="register">
                        <Link
                            className="w-full"
                            href={"/authentication/register"}> Register </Link>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            <Card>
                <CardHeader>
                    <CardTitle> {value} </CardTitle>
                    <CardDescription>Authorize Your Identity</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" placeholder="email address" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">
                        <Link href={"/"}> Cancel </Link>
                    </Button>
                    <Button type="submit"> {value} </Button>
                </CardFooter>
            </Card>
        </Form>
    );
}