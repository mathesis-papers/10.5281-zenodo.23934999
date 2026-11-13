# Three variables are necessary for chiral-event parity

This package proves the minimality conjecture in §2.9 of Lester, Haddadin and
Gripaios, arXiv:2008.05206v6. Every pair of continuous, Lorentz- and
pair-permutation-invariant, parity-odd real variables vanishes together on a
chiral collision event. Their sufficient triples consequently have minimum
cardinality three on the respective four-particle domains.

Authors: Haobo Ma (ChronoAI Pte Ltd, Singapore), then Wenlin Zhang
(National University of Singapore; ChronoAI Pte Ltd, Singapore).
License: Creative Commons Attribution 4.0 International (CC BY 4.0).

## Contents

- `note.tex`: complete mathematical argument, consequences, coverage table,
  references and a pinned link to the corresponding Lean declaration.
- `metadata.json`: scientific description and bibliographic metadata.
- `verify.py`: exact algebraic checks, 31 rational sphere inputs, and
  marker families with four through twelve total momenta.
- `verification.json`: expected deterministic output of `verify.py`.
- `requirements.txt`: Python dependency for the algebraic checks.

## Build the note

Use Tectonic 0.17.0:

```sh
tectonic note.tex
```

Alternatively, use an ordinary LaTeX installation:

```sh
pdflatex note.tex
pdflatex note.tex
```

The bibliography is included directly in `note.tex`; BibTeX is unnecessary.

## Reproduce the algebraic checks

Use Python 3.10 or later and SymPy 1.14.0:

```sh
python3 -m pip install -r requirements.txt
python3 verify.py > verification-new.json
diff -u verification.json verification-new.json
```

The script verifies rotation, antipodal, collision and timelike-completion
identities, the algebraic exchange contradiction, and the stated finite controls.
The sphere of chiral events and the topological obstruction are proved in the
note. The linked Lean declaration `result` states the two-variable lower bound
for `allEvents` and `collisionEvents`. The matching upper bounds are the
sufficient triples in §5.1 of the posing paper; the additional-domain
consequences have written proofs in the note.

## Consequences and scope

The proof gives a lower bound of three for every permutation subgroup
containing a transposition on at least four momenta, including fully
interchangeable collections and two blocks of sizes at least two.
Small timelike markers also preserve a timelike unobserved completion
for every S2 × Sn collision class. A continuous complex scalar cannot
be sufficient either. In contrast, the determinant is a sufficient
single variable for four labeled forward-causal momenta.

The coverage table separates proved lower bounds, prior results and
questions not covered. Exact five-momentum minima, parameter-dependent
irreducibility and equal-mass or massless restrictions are not determined.
The main two-variable lower bound corresponds to the pinned Lean
declaration; the enlarged-domain, scalar and labeled consequences have
the written proofs in the note. Algebraic and finite checks do not
replace the topological or reflection arguments.
