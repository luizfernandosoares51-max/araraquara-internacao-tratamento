import unittest
from pathlib import Path
from playwright.sync_api import sync_playwright

HOME = 'https://centraldeacolhimentoereabilitacao.com/'
LOCAL = 'http://localhost:8080'

class AssistantHomeNavigation(unittest.TestCase):
    def test_home_link_closes_panel_without_sending_or_focusing(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            for width in (1280, 390, 320):
                with self.subTest(width=width):
                    context = browser.new_context(viewport={'width':1280,'height':1800})
                    page = context.new_page()
                    page.set_viewport_size({'width':width,'height':1800})
                    posts = []
                    page.on('request', lambda r: posts.append(r.url) if r.method == 'POST' and '/api/chat' in r.url else None)
                    page.goto(LOCAL, wait_until='networkidle')
                    home_heading = page.locator('h1').inner_text()
                    page.get_by_role('button', name='Falar com nosso assistente', exact=True).click()
                    dialog = page.get_by_role('dialog')
                    field = dialog.get_by_role('textbox', name='Mensagem para o Assistente de Acolhimento')
                    field.fill('Rascunho que não deve ser enviado')
                    link = dialog.get_by_role('link', name='Voltar ao início', exact=True)
                    self.assertEqual(link.get_attribute('href'), HOME)
                    self.assertEqual(dialog.get_by_role('link', name='WhatsApp', exact=True).get_attribute('href'), 'https://wa.me/5516997654579')
                    self.assertTrue(dialog.get_by_role('link', name='Ligar agora para', exact=False).is_visible())
                    page.evaluate("""() => { window.__homeClicks = []; document.addEventListener('click', e => { if(e.target.closest('a')?.textContent.includes('Voltar ao início')) window.__homeClicks.push('propagated'); }); document.querySelector('textarea').addEventListener('focus', () => window.__homeClicks.push('focused')); }""")
                    link.focus()
                    shots = Path('/tmp/browser/assistant-home')
                    dialog.screenshot(path=str(shots / f'{width}-before.png'))
                    # Hold the real destination request long enough to inspect closure,
                    # then display the local institutional Home under the exact requested URL.
                    def home_response(route):
                        response = context.request.get(LOCAL)
                        body = response.text().replace('<head>', '<head><base href="'+LOCAL+'/">', 1)
                        route.fulfill(status=200, content_type='text/html', body=body)
                    page.route(HOME, home_response)
                    page.route('https://centraldeacolhimentoereabilitacao.com/assets/**', lambda route: route.fulfill(response=context.request.get(LOCAL + '/' + route.request.url.split('.com/',1)[1])))
                    # Capture dialog closure and absence of textarea focus before unload.
                    page.evaluate("""() => { window.__homeEvidence = {closed:false}; new MutationObserver(() => {if(!document.querySelector('[role=dialog]')) {window.__homeEvidence.closed=true; sessionStorage.setItem('homeEvidence', JSON.stringify({closed:true, events:window.__homeClicks}));}}).observe(document.body,{childList:true,subtree:true}); }""")
                    link.click()
                    page.wait_for_url(HOME)
                    page.wait_for_load_state('networkidle')
                    self.assertEqual(page.url, HOME)
                    self.assertEqual(page.locator('h1').inner_text(), home_heading)
                    self.assertEqual(page.get_by_role('dialog').count(), 0)
                    self.assertEqual(posts, [])
                    self.assertNotEqual(page.evaluate('document.activeElement?.tagName'), 'TEXTAREA')
                    page.screenshot(path=str(shots / f'{width}-after.png'))
                    print(f'{width}px: institutional Home loaded at exact destination, panel absent, no chat submission')
                    context.close()
            browser.close()

if __name__ == '__main__':
    unittest.main()
