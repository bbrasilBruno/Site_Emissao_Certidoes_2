import Link from "next/link"
import { FileText, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 font-bold">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg">Certidões Online</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Emissão rápida e segura de certidões oficiais. Seu documento sem sair de casa.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos#nascimento" className="text-muted-foreground hover:text-foreground">
                  Certidão de Nascimento
                </Link>
              </li>
              <li>
                <Link href="/servicos#casamento" className="text-muted-foreground hover:text-foreground">
                  Certidão de Casamento
                </Link>
              </li>
              <li>
                <Link href="/servicos#obito" className="text-muted-foreground hover:text-foreground">
                  Certidão de Óbito
                </Link>
              </li>
              <li>
                <Link href="/rastrear" className="text-muted-foreground hover:text-foreground">
                  Rastrear Pedido
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-foreground">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">(11) 1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">contato@certidoes.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  São Paulo, SP
                  <br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Certidões Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
