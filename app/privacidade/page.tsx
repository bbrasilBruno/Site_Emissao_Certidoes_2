import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-muted/20">
      <section className="border-b bg-muted/30 px-6 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Privacidade
          </Badge>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Política de Privacidade</h1>
          <p className="text-muted-foreground">Última atualização: Janeiro de 2026</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="prose prose-gray max-w-none p-8 dark:prose-invert">
              <h2>1. Informações que Coletamos</h2>
              <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
              <ul>
                <li>Dados pessoais (nome, CPF, data de nascimento)</li>
                <li>Informações de contato (e-mail, telefone, endereço)</li>
                <li>Dados de pagamento (processados por parceiros seguros)</li>
                <li>Informações sobre o uso do site (cookies, navegação)</li>
              </ul>

              <h2>2. Como Usamos Suas Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul>
                <li>Processar suas solicitações de certidões</li>
                <li>Comunicar sobre o status dos pedidos</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança</li>
              </ul>

              <h2>3. Compartilhamento de Informações</h2>
              <p>Não vendemos suas informações pessoais. Compartilhamos dados apenas com:</p>
              <ul>
                <li>Cartórios oficiais (necessário para emissão das certidões)</li>
                <li>Processadores de pagamento autorizados</li>
                <li>Serviços de entrega e logística</li>
                <li>Autoridades legais, quando exigido por lei</li>
              </ul>

              <h2>4. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais
                contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL e
                seguimos as melhores práticas de segurança.
              </p>

              <h2>5. Seus Direitos (LGPD)</h2>
              <p>De acordo com a LGPD, você tem direito a:</p>
              <ul>
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a anonimização ou exclusão de dados</li>
                <li>Revogar o consentimento</li>
                <li>Obter informações sobre compartilhamento de dados</li>
              </ul>

              <h2>6. Cookies</h2>
              <p>
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar
                conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas
                funcionalidades do site.
              </p>

              <h2>7. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as
                quais foram coletadas, incluindo requisitos legais e regulatórios.
              </p>

              <h2>8. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através do
                e-mail cadastrado ou aviso no site.
              </p>

              <h2>9. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato através de:
                privacidade@certidoes.com.br
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
