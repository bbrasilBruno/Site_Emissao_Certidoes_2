import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Clock, Target, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-muted/30 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Sobre Nós
            </Badge>
            <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Simplificando a emissão de certidões no Brasil
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Somos uma empresa brasileira dedicada a tornar o processo de solicitação de certidões mais simples, rápido
              e acessível para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Facilitar o acesso a documentos oficiais, eliminando burocracias e tornando o processo 100% digital e
                  seguro.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser a plataforma líder em emissão de certidões digitais no Brasil, reconhecida pela confiabilidade e
                  eficiência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Nossos Valores</h3>
                <p className="text-muted-foreground">
                  Transparência, segurança, agilidade e compromisso com a satisfação dos nossos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t bg-muted/30 px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Por que nos escolher?</h2>
            <p className="text-muted-foreground">Diferenciais que fazem toda a diferença</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Seus dados são protegidos com criptografia de ponta e nunca compartilhados
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Processamento em até 2 dias úteis, com opção de entrega expressa em 24h
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Suporte Dedicado</h3>
              <p className="text-sm text-muted-foreground">
                Equipe especializada pronta para ajudar em todas as etapas do processo
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Qualidade Garantida</h3>
              <p className="text-sm text-muted-foreground">
                Documentos oficiais e autenticados, válidos em todo território nacional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Números que nos orgulham</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">50k+</p>
              <p className="text-muted-foreground">Certidões Emitidas</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground">Satisfação dos Clientes</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">24h</p>
              <p className="text-muted-foreground">Entrega Express</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">27</p>
              <p className="text-muted-foreground">Estados Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Como funciona</h2>
            <p className="text-muted-foreground">Simples, rápido e sem complicações</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Escolha a certidão",
                description: "Selecione o tipo de documento que você precisa e preencha os dados solicitados",
              },
              {
                step: "2",
                title: "Realize o pagamento",
                description: "Pague de forma segura através de cartão, PIX ou boleto bancário",
              },
              {
                step: "3",
                title: "Aguarde o processamento",
                description: "Nossa equipe busca e processa sua certidão nos cartórios oficiais",
              },
              {
                step: "4",
                title: "Receba em casa",
                description: "Seu documento é enviado para o endereço informado com rastreamento",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-6 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold">Pronto para começar?</h2>
          <p className="mb-6 text-pretty text-muted-foreground">
            Junte-se a milhares de brasileiros que já confiam em nosso serviço
          </p>
          <Button asChild size="lg">
            <Link href="/solicitar">Solicitar Certidão</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
