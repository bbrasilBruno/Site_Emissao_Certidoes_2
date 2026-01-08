"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Clock, CheckCircle, XCircle, Search, FileText, Download, Eye, Calendar } from "lucide-react"

// Mock data - in production this would come from an API
const mockOrders = [
  {
    id: "PED-2024-1234",
    type: "Certidão de Nascimento",
    status: "delivered",
    statusLabel: "Entregue",
    requestDate: "15/01/2026",
    deliveryDate: "18/01/2026",
    price: "R$ 80,00",
    trackingCode: "BR123456789",
  },
  {
    id: "PED-2024-1235",
    type: "Certidão de Casamento",
    status: "processing",
    statusLabel: "Em processamento",
    requestDate: "03/01/2026",
    deliveryDate: "06/01/2026",
    price: "R$ 80,00",
    trackingCode: null,
  },
  {
    id: "PED-2024-1236",
    type: "Certidão de Óbito",
    status: "in_transit",
    statusLabel: "Em trânsito",
    requestDate: "28/12/2025",
    deliveryDate: "31/12/2025",
    price: "R$ 130,00",
    trackingCode: "BR987654321",
  },
  {
    id: "PED-2024-1237",
    type: "Certidão de Nascimento",
    status: "pending",
    statusLabel: "Aguardando pagamento",
    requestDate: "02/01/2026",
    deliveryDate: "-",
    price: "R$ 80,00",
    trackingCode: null,
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-5 w-5 text-green-600" />
    case "in_transit":
      return <Package className="h-5 w-5 text-blue-600" />
    case "processing":
      return <Clock className="h-5 w-5 text-orange-600" />
    case "pending":
      return <Clock className="h-5 w-5 text-yellow-600" />
    case "cancelled":
      return <XCircle className="h-5 w-5 text-red-600" />
    default:
      return <Clock className="h-5 w-5" />
  }
}

const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case "delivered":
      return "default"
    case "in_transit":
      return "secondary"
    case "processing":
      return "secondary"
    case "pending":
      return "outline"
    case "cancelled":
      return "destructive"
    default:
      return "outline"
  }
}

export default function MeusPedidosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: mockOrders.length,
    delivered: mockOrders.filter((o) => o.status === "delivered").length,
    processing: mockOrders.filter((o) => o.status === "processing" || o.status === "in_transit").length,
    pending: mockOrders.filter((o) => o.status === "pending").length,
  }

  return (
    <div className="min-h-screen bg-muted/20 px-6 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Meus Pedidos</h1>
          <p className="text-muted-foreground">Gerencie e acompanhe todas as suas solicitações</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total de Pedidos</CardDescription>
              <CardTitle className="text-3xl">{stats.total}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Entregues</CardDescription>
              <CardTitle className="text-3xl text-green-600">{stats.delivered}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Em Andamento</CardDescription>
              <CardTitle className="text-3xl text-blue-600">{stats.processing}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pendentes</CardDescription>
              <CardTitle className="text-3xl text-orange-600">{stats.pending}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1">
                <label htmlFor="search" className="mb-2 block text-sm font-medium">
                  Buscar pedido
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Número do pedido ou tipo de certidão"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <label htmlFor="filter" className="mb-2 block text-sm font-medium">
                  Filtrar por status
                </label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger id="filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                    <SelectItem value="in_transit">Em trânsito</SelectItem>
                    <SelectItem value="processing">Em processamento</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="active">Ativos</TabsTrigger>
            <TabsTrigger value="delivered">Entregues</TabsTrigger>
            <TabsTrigger value="pending">Pendentes</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Package className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-muted-foreground">Nenhum pedido encontrado</p>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <div className="mb-1 flex items-center gap-2">
                              <h3 className="font-semibold">{order.id}</h3>
                              {getStatusIcon(order.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{order.type}</p>
                          </div>
                          <Badge variant={getStatusVariant(order.status)}>{order.statusLabel}</Badge>
                        </div>
                        <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Data do pedido</p>
                              <p className="font-medium">{order.requestDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Previsão de entrega</p>
                              <p className="font-medium">{order.deliveryDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Valor</p>
                              <p className="font-medium">{order.price}</p>
                            </div>
                          </div>
                        </div>
                        {order.trackingCode && (
                          <div className="mt-3 rounded-lg bg-muted/50 p-3">
                            <p className="text-xs text-muted-foreground">Código de rastreamento</p>
                            <p className="font-mono text-sm font-medium">{order.trackingCode}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 md:flex-col">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2 bg-transparent md:flex-none"
                        >
                          <Link href="/rastrear">
                            <Eye className="h-4 w-4" />
                            Ver Detalhes
                          </Link>
                        </Button>
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent md:flex-none">
                            <Download className="h-4 w-4" />
                            Baixar
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {filteredOrders
              .filter((o) => o.status === "processing" || o.status === "in_transit")
              .map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <div className="mb-1 flex items-center gap-2">
                              <h3 className="font-semibold">{order.id}</h3>
                              {getStatusIcon(order.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{order.type}</p>
                          </div>
                          <Badge variant={getStatusVariant(order.status)}>{order.statusLabel}</Badge>
                        </div>
                        <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Data do pedido</p>
                              <p className="font-medium">{order.requestDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Previsão de entrega</p>
                              <p className="font-medium">{order.deliveryDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Link href="/rastrear">
                          <Eye className="h-4 w-4" />
                          Ver Detalhes
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="delivered" className="space-y-4">
            {filteredOrders
              .filter((o) => o.status === "delivered")
              .map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <div className="mb-1 flex items-center gap-2">
                              <h3 className="font-semibold">{order.id}</h3>
                              {getStatusIcon(order.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{order.type}</p>
                          </div>
                          <Badge variant={getStatusVariant(order.status)}>{order.statusLabel}</Badge>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Entregue em {order.deliveryDate}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Download className="h-4 w-4" />
                          Baixar
                        </Button>
                        <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Link href="/rastrear">
                            <Eye className="h-4 w-4" />
                            Detalhes
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {filteredOrders
              .filter((o) => o.status === "pending")
              .map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <div className="mb-1 flex items-center gap-2">
                              <h3 className="font-semibold">{order.id}</h3>
                              {getStatusIcon(order.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{order.type}</p>
                          </div>
                          <Badge variant={getStatusVariant(order.status)}>{order.statusLabel}</Badge>
                        </div>
                        <p className="mt-2 text-sm text-orange-600">Aguardando confirmação de pagamento</p>
                      </div>
                      <Button size="sm">Realizar Pagamento</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
