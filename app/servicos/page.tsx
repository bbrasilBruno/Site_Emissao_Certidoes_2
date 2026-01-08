import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    id: "nascimento",
    title: "Certidão de Nascimento",
    description: "Documento fundamental que registra o nascimento de uma pessoa",
    price: "R$ 80,00",
    deliveryTime: "2-3 dias úteis",
    features: [
      "1ª e 2ª via disponíveis",
      "Inteiro teor ou específica",
      "Válida em todo território nacional",
      "Documento oficial e autenticado",
      "Busca automatizada nos cartórios",
    ],
    useCases: [
      "Emissão de documentos (RG, CPF, Passaporte)",
      "Matrícula escolar",
      "Abertura de conta bancária",
      "Solicitação de benefícios sociais",
      "Processos de cidadania",
    ],
  },
  {
    id: "casamento",
    title: "Certidão de Casamento",
    description: "Documento que comprova a união matrimonial entre duas pessoas",
    price: "R$ 80,00",
    deliveryTime: "2-3 dias úteis",
    features: [
      "Certidão atualizada",
      "Com ou sem averbações",
      "Inteiro teor ou específica",
      "Válida em todo território nacional",
      "Busca em cartórios de todo Brasil",
    ],
    useCases: [
      "Alteração de estado civil em documentos",
      "Declaração de imposto de renda",
      "Inclusão de dependentes",
      "Processos de inventário",
      "Solicitação de visto",
    ],
  },
  {
    id: "obito",
    title: "Certidão de Óbito",
    description: "Documento que registra oficialmente o falecimento de uma pessoa",
    price: "R$ 80,00",
    deliveryTime: "2-3 dias úteis",
    features: [
      "Emissão respeitosa e ágil",
      "Inteiro teor ou específica",
      "Válida para todos os fins legais",
      "Documento oficial autenticado",
      "Busca em cartórios nacionais",
    ],
    useCases: [
      "Processos de inventário",
      "Transferência de bens e propriedades",
      "Encerramento de contas e contratos",
      "Solicitação de pensões",
      "Questões sucessórias",
    ],
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-muted/30 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-6">
            Todos os Serviços
          </Badge>
          <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Nossos Serviços</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Oferecemos emissão de certidões com segurança, agilidade e garantia de autenticidade
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">100% Seguro</p>
                <p className="text-sm text-muted-foreground">Dados protegidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Entrega Rápida</p>
                <p className="text-sm text-muted-foreground">2-3 dias úteis</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Oficial</p>
                <p className="text-sm text-muted-foreground">Documentos válidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Confiável</p>
                <p className="text-sm text-muted-foreground">Milhares atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <Card className="overflow-hidden">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <CardHeader className="space-y-4">
                      <div>
                        <CardTitle className="mb-2 text-2xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="flex items-baseline gap-4">
                        <div>
                          <p className="text-3xl font-bold text-primary">{service.price}</p>
                          <p className="text-sm text-muted-foreground">por certidão</p>
                        </div>
                        <Badge variant="outline" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {service.deliveryTime}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="mb-3 font-semibold">O que está incluído:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full gap-2">
                        <Link href="/solicitar">
                          Solicitar Agora
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  <div className={`bg-muted/50 p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="mb-4 font-semibold">Quando você precisa:</h3>
                    <ul className="space-y-3">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">Pronto para solicitar?</h2>
          <p className="mb-6 text-pretty text-muted-foreground">
            Processo 100% online em poucos minutos. Comece agora mesmo.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/solicitar">
                Solicitar Certidão
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/precos">Ver Preços Detalhados</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
