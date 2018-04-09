ng new html-sass-reference --prefix hsr --routing --style scss --dry-run
ng g m reference -m=app --spec --routing --dry-run
ng g c reference --flat -m=reference -is -it --spec --dry-run
ng g c select-styled --flat -m=reference -is -it
