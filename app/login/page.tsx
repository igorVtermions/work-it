import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Work It - Entrar',
  description: 'Organize sua equipe na melhor plataforma do mercado - Work It',
}

export default function Login() {
  return (
    <section className='flex items-center justify-center w-full pt-8 flex-col'>
      <h1 className="text-black font-bold text-2xl mb-8">Work <span className="text-white bg-purple-800 rounded-sm px-1">it</span></h1>
      <Tabs defaultValue="login" className="w-[320px] md:w-[450px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className='pb-4'>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Preencha os campos com seus dados.
              </CardDescription>
            </CardHeader>
            <form>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="senha">Senha</Label>
                  <Input id="senha" type='password' required />
                </div>
              </CardContent>
              <CardFooter>
                <Button className='mx-auto'>Entrar</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="cadastro">
          <Card>
            <CardHeader>
              <CardTitle>Cadastro</CardTitle>
              <CardDescription>
                Preencha os campos para criar uma conta.
              </CardDescription>
            </CardHeader>
            <form>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" type="text" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="text" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="secondPassword">Confirmar senha</Label>
                  <Input id="secondPassword" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button className='mx-auto'>Cadastrar</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
