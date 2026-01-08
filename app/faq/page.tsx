import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, FileText, CreditCard, Truck, Shield } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    title: "Sobre os Serviços",
    icon: FileText,
    questions: [
      {
        q: "Quais tipos de certidões vocês emitem?",
        a: "Emitimos certidões de nascimento, casamento e óbito, em formato inteiro teor ou específico. Atendemos pedidos de todo o Brasil.",
      },
      {
        q: "As certidões são oficiais?",
        a: "Sim! Todas as certidões emitidas são documentos oficiais, autenticados e válidos em todo o território nacional. Fazemos a busca diretamente nos cartórios registradores.",
      },
      {
        q: "Posso solicitar certidões de outras pessoas?",
        a: "Sim, desde que você seja ascendente, descendente, cônjuge ou tenha procuração específica. Alguns tipos de certidão podem exigir comprovação de parentesco.",
      },
      {
        q: "Preciso informar o cartório onde foi feito o registro?",
        a: "Não é obrigatório. Se você souber o cartório, o processo pode ser mais rápido, mas fazemos a busca automatizada nos cartórios da cidade informada.",
      },
    ],
  },
  {
    title: "Pagamento e Preços",
    icon: CreditCard,
    questions: [
      {
        q: "Quais são as formas de pagamento?",
        a: "Aceitamos cartão de crédito, PIX, boleto bancário e carteiras digitais. O pagamento é processado de forma 100% segura.",
      },
      {
        q: "Posso parcelar o pagamento?",
        a: "Sim! Para compras acima de R$ 100,00, oferecemos parcelamento em até 3x sem juros no cartão de crédito.",
      },
      {
        q: "Há taxas adicionais?",
        a: "Não. O valor informado no momento da solicitação já inclui todos os custos, incluindo busca, emissão e envio (exceto se optar por entrega expressa).",
      },
      {
        q: "Posso cancelar e receber reembolso?",
        a: "Sim. Você pode cancelar em até 24 horas após o pagamento, desde que o processamento ainda não tenha iniciado. O reembolso é feito em até 7 dias úteis.",
      },
    ],
  },
  {
    title: "Prazos e Entrega",
    icon: Truck,
    questions: [
      {
        q: "Qual o prazo de entrega?",
        a: "O prazo padrão é de 2 a 3 dias úteis após a confirmação do pagamento. Também oferecemos entrega expressa em 24 horas por um custo adicional.",
      },
      {
        q: "Como posso rastrear meu pedido?",
        a: "Após a emissão, você receberá um código de rastreamento por e-mail. Você também pode acompanhar o status em tempo real na área de Rastrear Pedido do nosso site.",
      },
      {
        q: "Vocês entregam em todo o Brasil?",
        a: "Sim! Atendemos todos os estados brasileiros e enviamos para o endereço que você informar no momento da solicitação.",
      },
      {
        q: "E se eu não receber a certidão no prazo?",
        a: "Entre em contato imediatamente conosco. Faremos uma nova busca e, se necessário, reenviamos sem custo adicional.",
      },
    ],
  },
  {
    title: "Segurança e Privacidade",
    icon: Shield,
    questions: [
      {
        q: "Meus dados estão seguros?",
        a: "Sim! Utilizamos criptografia de ponta e seguimos todas as normas da LGPD. Seus dados nunca são compartilhados com terceiros e são usados apenas para processar seu pedido.",
      },
      {
        q: "Como vocês garantem a autenticidade?",
        a: "Todas as certidões são obtidas diretamente dos cartórios oficiais e vêm com selo de autenticidade. Você pode verificar a autenticidade no site do CNJ.",
      },
      {
        q: "Preciso criar uma conta para solicitar?",
        a: "Não é obrigatório, mas recomendamos criar uma conta para facilitar o acompanhamento dos seus pedidos e futuras solicitações.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-muted/30 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="secondary" className="mb-6">
            Central de Ajuda
          </Badge>
          <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Perguntas Frequentes</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-5xl space-y-12">
          {faqCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, idx) => (
                    <AccordionItem key={idx} value={`${category.title}-${idx}`}>
                      <AccordionTrigger>
                        <span className="flex items-start gap-2 text-left">
                          <HelpCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pl-6 text-muted-foreground">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          })}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="border-t bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Ainda tem dúvidas?</CardTitle>
              <CardDescription>Nossa equipe está pronta para ajudar você</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <p className="text-center text-muted-foreground">
                Se você não encontrou a resposta que procura, entre em contato conosco. Teremos prazer em ajudar!
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/contato">Entrar em Contato</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/solicitar">Solicitar Certidão</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
