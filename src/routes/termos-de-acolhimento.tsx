import { createFileRoute, Link } from "@tanstack/react-router";
import { InstitutionalPage } from "@/components/institutional-page";
import { institutionalHead } from "@/lib/institutional";

export const Route = createFileRoute("/termos-de-acolhimento")({
  head: () => institutionalHead("/termos-de-acolhimento", "Termos de Acolhimento e Atendimento", "Limites das orientações do site, avaliação profissional, direitos e esclarecimentos prévios ao acolhimento na Central."),
  component: TermsPage,
});

function TermsPage() {
  return <InstitutionalPage title="Termos de Acolhimento e Atendimento" intro="Orientações gerais para o uso do site e para a busca de informações. Esta página não é um contrato de prestação de serviços nem autoriza uma internação.">
    <section><h2>Uso das informações</h2><p>Os textos, o guia e o assistente oferecem informações educativas sobre dependência química, alcoolismo, saúde mental e apoio às famílias. Não substituem avaliação presencial, diagnóstico, prescrição, atendimento de emergência ou orientação jurídica individual.</p><p>Não prometemos cura, prazo de recuperação ou resultados terapêuticos. Nenhuma resposta do site confirma vaga, preço, parceria, disponibilidade ou indicação de internação.</p></section>
    <section><h2>Antes de qualquer acolhimento</h2><p>Solicite esclarecimentos sobre o enquadramento do serviço, responsáveis e registros profissionais aplicáveis, licença sanitária, condições de atendimento, direitos, custos, visitas, privacidade, eventual saída e encaminhamento para outros serviços. Não há condições contratuais, preços ou política de cancelamento confirmados nesta página.</p><p>A contratação, quando aplicável, exige informações claras e documentação própria. O contato inicial ou o uso do assistente não representa contratação nem consentimento para tratamento.</p></section>
    <section><h2>Consentimento e modalidades de cuidado</h2><p>A indicação de cuidado depende de avaliação profissional individual. Internação voluntária, involuntária e compulsória possuem requisitos distintos; acolhimento não é equivalente a internação médica. Não é possível determinar uma modalidade por formulário ou conversa virtual.</p><p><Link to="/transparencia">Consulte as referências legais e os limites de comprovação institucional</Link>.</p></section>
    <section><h2>Emergências e segurança</h2><p>Em emergência médica ou risco imediato à vida, ligue 192 (SAMU). Não aguarde resposta do assistente, e-mail ou WhatsApp da Central. O canal institucional não é apresentado como serviço de urgência ou atendimento 24 horas.</p><p><Link to="/contato">Acesse os contatos oficiais e os serviços públicos de emergência</Link>.</p></section>
    <section><h2>Respeito e privacidade</h2><p>Evite enviar informações identificáveis de terceiros sem autorização ou justificativa legal. As orientações devem preservar a dignidade e os direitos da pessoa e da família, sem coerção, estigma ou promessa de resultado.</p><p><Link to="/politica-de-privacidade">Consulte a Política de Privacidade e LGPD</Link>.</p></section>
  </InstitutionalPage>;
}