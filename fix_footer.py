import sys

file_path = r'c:\Users\USER\OneDrive\Documents\EveShieldmvp\eveshield-safety-hub\index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken Instagram SVG class
broken_instagram = '<svg class="lucide luc\n                                     ide-instagram w-5 h-5"'
fixed_instagram = '<svg class="lucide lucide-instagram w-5 h-5"'
content = content.replace(broken_instagram, fixed_instagram)

# Fix the broken LinkedIn target attr
broken_linkedin = 'target="_blank\n                         " rel="noopener"'
fixed_linkedin = 'target="_blank" rel="noopener"'
content = content.replace(broken_linkedin, fixed_linkedin)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed newlines in index.html')
