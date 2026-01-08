"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, FileText, User, CreditCard, CheckCircle, Mail } from "lucide-react"
import Link from "next/link"

const CERTIFICATE_TYPES = [
  { value: "nascimento", label: "Certidão de Nascimento" },
  { value: "casamento", label: "Certidão de Casamento" },
  { value: "obito", label: "Certidão de Óbito" },
]

const CERTIFICATE_FORMATS = [
  { value: "inteiro-teor", label: "Inteiro Teor", description: "Certidão completa com todas as informações" },
  { value: "especifica", label: "Específica", description: "Certidão resumida com dados essenciais" },
]

export default function SolicitarPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    certificateType: "",
    certificateFormat: "",
    isFirstCopy: true,
    personName: "",
    personCpf: "",
    birthDate: "",
    motherName: "",
    fatherName: "",
    registryNumber: "",
    registryLocation: "",
    requesterName: "",
    requesterCpf: "",
    requesterEmail: "",
    requesterEmailConfirmation: "", // Email confirmation field
    requesterPhone: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZipCode: "",
    urgentDelivery: false,
  })

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    nextStep()
  }

  return (
    <div className="min-h-screen bg-muted/20 px-6 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o início
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Solicitar Certidão</h1>
          <p className="text-muted-foreground">Preencha os dados abaixo para solicitar sua certidão</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Tipo", icon: FileText },
              { num: 2, label: "Dados", icon: User },
              { num: 3, label: "Entrega", icon: CreditCard },
              { num: 4, label: "Conclusão", icon: CheckCircle },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.num} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                        step >= item.num
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                  {index < 3 && <div className={`mx-2 h-0.5 flex-1 ${step > item.num ? "bg-primary" : "bg-border"}`} />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step 1: Certificate Type */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Selecione o tipo de certidão</CardTitle>
              <CardDescription>Escolha qual certidão você deseja solicitar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="certificate-type">Tipo de Certidão</Label>
                <Select
                  value={formData.certificateType}
                  onValueChange={(value) => updateFormData("certificateType", value)}
                >
                  <SelectTrigger id="certificate-type">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {CERTIFICATE_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Formato da Certidão</Label>
                <RadioGroup
                  value={formData.certificateFormat}
                  onValueChange={(value) => updateFormData("certificateFormat", value)}
                  className="space-y-3"
                >
                  {CERTIFICATE_FORMATS.map((format) => (
                    <div key={format.value} className="flex items-start space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value={format.value} id={format.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={format.value} className="cursor-pointer font-medium">
                          {format.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="first-copy"
                  checked={formData.isFirstCopy}
                  onCheckedChange={(checked) => updateFormData("isFirstCopy", checked === true)}
                />
                <Label htmlFor="first-copy" className="cursor-pointer text-sm font-normal">
                  Esta é a primeira via da certidão
                </Label>
              </div>

              <div className="flex justify-end">
                <Button onClick={nextStep} disabled={!formData.certificateType || !formData.certificateFormat}>
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Personal Data */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Dados do titular</CardTitle>
              <CardDescription>Informe os dados da pessoa que consta na certidão</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="person-name">Nome Completo *</Label>
                  <Input
                    id="person-name"
                    placeholder="Nome completo do titular"
                    value={formData.personName}
                    onChange={(e) => updateFormData("personName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="person-cpf">CPF</Label>
                  <Input
                    id="person-cpf"
                    placeholder="000.000.000-00"
                    value={formData.personCpf}
                    onChange={(e) => updateFormData("personCpf", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-date">Data de Nascimento *</Label>
                <Input
                  id="birth-date"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => updateFormData("birthDate", e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="mother-name">Nome da Mãe *</Label>
                  <Input
                    id="mother-name"
                    placeholder="Nome completo da mãe"
                    value={formData.motherName}
                    onChange={(e) => updateFormData("motherName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="father-name">Nome do Pai</Label>
                  <Input
                    id="father-name"
                    placeholder="Nome completo do pai"
                    value={formData.fatherName}
                    onChange={(e) => updateFormData("fatherName", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="registry-number">Número do Registro</Label>
                  <Input
                    id="registry-number"
                    placeholder="Número do registro"
                    value={formData.registryNumber}
                    onChange={(e) => updateFormData("registryNumber", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registry-location">Local do Registro *</Label>
                  <Input
                    id="registry-location"
                    placeholder="Cidade/Estado"
                    value={formData.registryLocation}
                    onChange={(e) => updateFormData("registryLocation", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Dados do Solicitante</Label>
                <p className="text-sm text-muted-foreground">Informe seus dados como solicitante</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="requester-name">Seu Nome Completo *</Label>
                  <Input
                    id="requester-name"
                    placeholder="Seu nome"
                    value={formData.requesterName}
                    onChange={(e) => updateFormData("requesterName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requester-cpf">Seu CPF *</Label>
                  <Input
                    id="requester-cpf"
                    placeholder="000.000.000-00"
                    value={formData.requesterCpf}
                    onChange={(e) => updateFormData("requesterCpf", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="requester-email">E-mail *</Label>
                  <Input
                    id="requester-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.requesterEmail}
                    onChange={(e) => updateFormData("requesterEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requester-phone">Telefone *</Label>
                  <Input
                    id="requester-phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.requesterPhone}
                    onChange={(e) => updateFormData("requesterPhone", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={
                    !formData.personName ||
                    !formData.birthDate ||
                    !formData.motherName ||
                    !formData.registryLocation ||
                    !formData.requesterName ||
                    !formData.requesterCpf ||
                    !formData.requesterEmail ||
                    !formData.requesterPhone
                  }
                >
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Delivery & Payment */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Endereço de entrega</CardTitle>
              <CardDescription>Informe onde deseja receber sua certidão</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Confirme seu e-mail para receber o documento</h3>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    O documento digital será enviado para o endereço de e-mail confirmado abaixo
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-display">E-mail cadastrado</Label>
                      <div className="flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{formData.requesterEmail}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-confirmation">Confirme seu e-mail *</Label>
                      <Input
                        id="email-confirmation"
                        type="email"
                        placeholder="Digite novamente seu e-mail"
                        value={formData.requesterEmailConfirmation}
                        onChange={(e) => updateFormData("requesterEmailConfirmation", e.target.value)}
                        className={
                          formData.requesterEmailConfirmation &&
                          formData.requesterEmail !== formData.requesterEmailConfirmation
                            ? "border-destructive focus-visible:ring-destructive"
                            : formData.requesterEmailConfirmation &&
                                formData.requesterEmail === formData.requesterEmailConfirmation
                              ? "border-primary focus-visible:ring-primary"
                              : ""
                        }
                      />
                      {formData.requesterEmailConfirmation &&
                        formData.requesterEmail !== formData.requesterEmailConfirmation && (
                          <p className="text-sm text-destructive">Os e-mails não coincidem</p>
                        )}
                      {formData.requesterEmailConfirmation &&
                        formData.requesterEmail === formData.requesterEmailConfirmation && (
                          <p className="text-sm text-primary">✓ E-mail confirmado corretamente</p>
                        )}
                    </div>
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="delivery-address">Endereço Completo *</Label>
                  <Textarea
                    id="delivery-address"
                    placeholder="Rua, número, complemento, bairro"
                    value={formData.deliveryAddress}
                    onChange={(e) => updateFormData("deliveryAddress", e.target.value)}
                    rows={3}
                  />
                </div> */}
{/* 
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="delivery-city">Cidade *</Label>
                    <Input
                      id="delivery-city"
                      placeholder="Cidade"
                      value={formData.deliveryCity}
                      onChange={(e) => updateFormData("deliveryCity", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery-state">Estado *</Label>
                    <Input
                      id="delivery-state"
                      placeholder="UF"
                      maxLength={2}
                      value={formData.deliveryState}
                      onChange={(e) => updateFormData("deliveryState", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery-zip">CEP *</Label>
                    <Input
                      id="delivery-zip"
                      placeholder="00000-000"
                      value={formData.deliveryZipCode}
                      onChange={(e) => updateFormData("deliveryZipCode", e.target.value)}
                    />
                  </div>
                </div> */}

                {/* <div className="flex items-center space-x-2 rounded-lg border bg-muted/30 p-4">
                  <Checkbox
                    id="urgent-delivery"
                    checked={formData.urgentDelivery}
                    onCheckedChange={(checked) => updateFormData("urgentDelivery", checked === true)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="urgent-delivery" className="cursor-pointer font-medium">
                      Entrega urgente (24h)
                    </Label>
                    <p className="text-sm text-muted-foreground">Taxa adicional de R$ 50,00</p>
                  </div>
                </div> */}

                <div className="rounded-lg border bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold">Resumo do Pedido</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {CERTIFICATE_TYPES.find((t) => t.value === formData.certificateType)?.label}
                      </span>
                      <span className="font-medium">R$ 80,00</span>
                    </div>
                    {formData.urgentDelivery && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entrega urgente</span>
                        <span className="font-medium">R$ 50,00</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">R$ {formData.urgentDelivery ? "130,00" : "80,00"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      !formData.requesterEmailConfirmation ||
                      formData.requesterEmail !== formData.requesterEmailConfirmation
                    }
                  >
                    Finalizar Pedido
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h2 className="mb-2 text-2xl font-bold">Pedido realizado com sucesso!</h2>
              <p className="mb-6 text-muted-foreground">
                Seu pedido foi registrado com o número{" "}
                <span className="font-semibold">#PED-2024-{Math.floor(Math.random() * 10000)}</span>
              </p>
              <div className="mb-8 rounded-lg border bg-muted/30 p-6">
                <h3 className="mb-4 font-semibold">Próximos Passos</h3>
                <ol className="space-y-3 text-left text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      1
                    </span>
                    <span>Você receberá um e-mail com as instruções de pagamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      2
                    </span>
                    <span>Após a confirmação do pagamento, iniciaremos o processamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      3
                    </span>
                    <span>
                      Sua certidão será enviada no prazo de {formData.urgentDelivery ? "24 horas" : "2 a 3 dias úteis"}
                    </span>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/rastrear">Rastrear Pedido</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
