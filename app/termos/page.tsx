import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-muted/20">
      <section className="border-b bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Termos de Uso</h1>
          <p className="text-muted-foreground">Última atualização: Janeiro de 2026</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="prose prose-gray max-w-none p-8 dark:prose-invert">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar este site, você aceita e concorda em cumprir os termos e condições aqui estabelecidos.
                Se você não concorda com estes termos, não utilize nossos serviços.
              </p>

              <h2>2. Descrição dos Serviços</h2>
              <p>
                Oferecemos serviços de solicitação e emissão de certidões oficiais de nascimento, casamento e óbito.
                Atuamos como intermediários entre o cliente e os cartórios registradores.
              </p>

              <h2>3. Responsabilidades do Usuário</h2>
              <p>Ao utilizar nossos serviços, você se compromete a:</p>
              <ul>
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Usar os serviços apenas para fins legítimos</li>
                <li>Não violar direitos de terceiros</li>
              </ul>

              <h2>4. Pagamentos e Reembolsos</h2>
              <p>
                Os pagamentos são processados de forma segura através de nossos parceiros. Cancelamentos podem ser
                solicitados em até 24 horas após o pagamento, desde que o processamento não tenha iniciado.
              </p>

              <h2>5. Privacidade e Proteção de Dados</h2>
              <p>
                Respeitamos sua privacidade e seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD). Consulte
                nossa Política de Privacidade para mais informações.
              </p>

              <h2>6. Limitação de Responsabilidade</h2>
              <p>
                Não nos responsabilizamos por atrasos ou impossibilidade de emissão causados por fatores externos, como
                problemas nos cartórios ou informações incorretas fornecidas pelo usuário.
              </p>

              <h2>7. Modificações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor
                imediatamente após a publicação no site.
              </p>

              <h2>8. Contato</h2>
              <p>
                Para questões relacionadas a estes termos, entre em contato através de contato@certidoes.com.br ou pelos
                canais disponíveis na página de contato.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
