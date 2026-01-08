"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Search, Package, Truck, CheckCircle, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function RastrearPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [cpf, setCpf] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Searching order:", orderNumber, cpf)
    setShowResults(true)
  }

  // Mock data - in production, this would come from an API
  const mockOrder = {
    number: orderNumber || "PED-2024-1234",
    status: "in_transit",
    certificateType: "Certidão de Nascimento",
    requestDate: "15/01/2026",
    estimatedDelivery: "18/01/2026",
    currentStatus: "Em trânsito para entrega",
    timeline: [
      { status: "Pedido recebido", date: "15/01/2026 10:30", completed: true },
      { status: "Pagamento confirmado", date: "15/01/2026 14:45", completed: true },
      { status: "Certidão emitida", date: "16/01/2026 09:15", completed: true },
      { status: "Enviado para entrega", date: "17/01/2026 08:00", completed: true },
      { status: "Em trânsito", date: "17/01/2026 16:30", completed: true },
      { status: "Entregue", date: "", completed: false },
    ],
  }

  return (
    <div className="min-h-screen bg-muted/20 px-6 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Rastrear Pedido</h1>
          <p className="text-muted-foreground">Acompanhe o status da sua solicitação</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Buscar Pedido</CardTitle>
            <CardDescription>Informe o número do pedido e seu CPF</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="order-number">Número do Pedido</Label>
                  <Input
                    id="order-number"
                    placeholder="PED-2024-0000"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF do Solicitante</Label>
                  <Input id="cpf" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </div>
              </div>
              <Button type="submit" className="w-full gap-2">
                <Search className="h-4 w-4" />
                Buscar Pedido
              </Button>
            </form>
          </CardContent>
        </Card>

        {showResults && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Pedido {mockOrder.number}</CardTitle>
                    <CardDescription>{mockOrder.certificateType}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <Truck className="h-3 w-3" />
                    {mockOrder.currentStatus}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 text-sm md:grid-cols-3">
                  <div>
                    <p className="mb-1 font-medium">Data do Pedido</p>
                    <p className="text-muted-foreground">{mockOrder.requestDate}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Previsão de Entrega</p>
                    <p className="text-muted-foreground">{mockOrder.estimatedDelivery}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium">Status</p>
                    <p className="text-muted-foreground">{mockOrder.currentStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Linha do Tempo</CardTitle>
                <CardDescription>Acompanhe todas as etapas do seu pedido</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative space-y-6">
                  {mockOrder.timeline.map((item, index) => {
                    const isLast = index === mockOrder.timeline.length - 1
                    return (
                      <div key={index} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              item.completed
                                ? "bg-primary text-primary-foreground"
                                : "border-2 border-border bg-background text-muted-foreground"
                            }`}
                          >
                            {item.completed ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                          </div>
                          {!isLast && (
                            <div
                              className={`h-full w-0.5 ${item.completed ? "bg-primary" : "bg-border"}`}
                              style={{ minHeight: "2rem" }}
                            />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <p className={`font-medium ${!item.completed && "text-muted-foreground"}`}>{item.status}</p>
                          {item.date && <p className="text-sm text-muted-foreground">{item.date}</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Precisa de ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Se você tiver dúvidas sobre seu pedido, entre em contato conosco
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <Link href="/contato">
                      <FileText className="h-4 w-4" />
                      Entrar em Contato
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <Link href="/faq">
                      <Package className="h-4 w-4" />
                      Ver FAQ
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
