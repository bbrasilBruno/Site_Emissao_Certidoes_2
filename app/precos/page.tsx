import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock, Zap, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const pricingPlans = [
  {
    name: "Entrega Normal",
    price: "80",
    period: "por certidão",
    description: "Ideal para quem não tem urgência",
    deliveryTime: "2-3 dias úteis",
    icon: Clock,
    features: [
      "Qualquer tipo de certidão",
      "Busca em cartórios nacionais",
      "Documento oficial e autenticado",
      "Válido em todo território",
      "Rastreamento online",
      "Suporte por e-mail",
    ],
    popular: false,
  },
  {
    name: "Entrega Express",
    price: "130",
    period: "por certidão",
    description: "Para quando você precisa com urgência",
    deliveryTime: "24 horas",
    icon: Zap,
    features: [
      "Qualquer tipo de certidão",
      "Busca em cartórios nacionais",
      "Documento oficial e autenticado",
      "Válido em todo território",
      "Rastreamento online prioritário",
      "Suporte por telefone e e-mail",
      "Processamento prioritário",
      "Envio expresso",
    ],
    popular: true,
  },
]

const additionalServices = [
  { name: "Autenticação adicional", price: "R$ 15,00" },
  { name: "Cópia extra da certidão", price: "R$ 25,00" },
  { name: "Tradução juramentada", price: "R$ 150,00" },
  { name: "Apostilamento de Haia", price: "R$ 200,00" },
]

export default function PrecosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-muted/30 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-6">
            Preços Transparentes
          </Badge>
          <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Planos e Preços</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Escolha o plano que melhor atende suas necessidades. Sem taxas ocultas, sem surpresas.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon
              return (
                <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="gap-1">
                        <Zap className="h-3 w-3" />
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="pt-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">R$ {plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <Badge variant="outline" className="mt-2 gap-1">
                        <Clock className="h-3 w-3" />
                        {plan.deliveryTime}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                      <Link href="/solicitar">
                        Solicitar Agora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="border-t bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">Serviços Adicionais</h2>
            <p className="text-muted-foreground">Complemente sua solicitação com serviços extras</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {additionalServices.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">Perguntas Frequentes sobre Preços</h2>
            <p className="text-muted-foreground">Tire suas dúvidas sobre valores e formas de pagamento</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Quais são as formas de pagamento aceitas?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Aceitamos cartão de crédito (à vista ou parcelado), boleto bancário, PIX e carteira digital. O pagamento
                é processado de forma segura através de nossa plataforma.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Posso parcelar o pagamento?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Sim! Para compras acima de R$ 100,00, oferecemos parcelamento em até 3x sem juros no cartão de crédito.
                Consulte as opções durante o checkout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />O preço inclui o envio?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Sim, todos os nossos preços já incluem o envio para qualquer lugar do Brasil. Não há taxas adicionais de
                frete, exceto se você optar pelo serviço express.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Há descontos para múltiplas certidões?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Sim! Na compra de 3 ou mais certidões, você recebe 10% de desconto no valor total. O desconto é aplicado
                automaticamente no carrinho.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Posso cancelar e receber reembolso?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Sim. Você pode cancelar seu pedido em até 24 horas após a confirmação do pagamento, desde que a certidão
                ainda não tenha sido processada. O reembolso é feito em até 7 dias úteis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">Pronto para começar?</h2>
          <p className="mb-6 text-pretty text-muted-foreground">Solicite sua certidão agora e receba em poucos dias</p>
          <Button asChild size="lg">
            <Link href="/solicitar">
              Solicitar Certidão
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
