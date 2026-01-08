import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Shield, CheckCircle, ArrowRight, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-gradient-to-b from-background to-muted/20 px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-6">
              Serviço Online Oficial
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Certidões de forma <span className="text-primary">rápida e segura</span>
            </h1>
            <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              Solicite certidões de nascimento, casamento, óbito e outros documentos oficiais sem sair de casa. Processo
              100% online e confiável.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/solicitar">
                  Solicitar Certidão
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <Link href="/rastrear">
                  <Search className="h-4 w-4" />
                  Rastrear Pedido
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Por que escolher nosso serviço?</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Facilitamos a emissão de certidões com segurança e agilidade
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Rápido</CardTitle>
                <CardDescription>Emissão em até 48 horas úteis</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Seguro</CardTitle>
                <CardDescription>Documentos oficiais e autenticados</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prático</CardTitle>
                <CardDescription>100% online, sem burocracia</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Confiável</CardTitle>
                <CardDescription>Milhares de certidões emitidas</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-t bg-muted/30 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Tipos de certidões disponíveis</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Oferecemos todos os tipos de certidões que você precisa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>Certidão de Nascimento</CardTitle>
                <CardDescription>1ª e 2ª via, inteiro teor ou específica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Documento essencial para diversos procedimentos civis
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/servicos#nascimento">Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>Certidão de Casamento</CardTitle>
                <CardDescription>Todos os tipos e modelos disponíveis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Necessária para atualização de documentos e processos legais
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/servicos#casamento">Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>Certidão de Óbito</CardTitle>
                <CardDescription>Emissão ágil e respeitosa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Indispensável para inventário e outras questões sucessórias
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/servicos#obito">Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="default">
              <Link href="/servicos">
                Ver todos os serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Pronto para solicitar sua certidão?</h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">
            O processo é simples e rápido. Comece agora e receba seu documento em poucos dias.
          </p>
          <Button asChild size="lg">
            <Link href="/solicitar">
              Iniciar solicitação
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
