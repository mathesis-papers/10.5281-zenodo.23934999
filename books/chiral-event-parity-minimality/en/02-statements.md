# Exact statements and complete proofs

This chapter fixes the notation and gives the full technical argument. The allowed transformations in the reader story form
$$G=\mathrm{SO}^{+}(1,3)\times S_2(pq)\times S_2(ab),$$
where the two copies of $S_2$ exchange the members of their respective pairs. We write $x^2=x\mathbin\cdot x$ and use
$$x\mathbin\cdot y=x^0y^0-x^1y^1-x^2y^2-x^3y^3.$$

## Definitions and the main theorem

Let
$$V_+=\{x\in\mathbb R^4:x^0\ge0,\ x^2\ge0\},$$
Set $\Omega_{\mathrm{all}}=V_+^4$. The collision domain $\Omega_{\mathrm{coll}}$ consists of those $(p,q,a,b)\in\Omega_{\mathrm{all}}$ satisfying
$$p^2q^2<(p\mathbin\cdot q)^2.$$
The forward cone includes zero and null momenta. These domains permit variable masses and do not require $p+q=a+b$. Write events in the order $e=(p,q,a,b)$. Parity is
$$\mathcal P(x^0,x^1,x^2,x^3)=(x^0,-x^1,-x^2,-x^3).$$
An event is chiral when no $g\in G$ satisfies $g e=\mathcal P e$. For either $\Omega$, an admissible variable is a real-valued function continuous on $\Omega$, invariant under $G$, and satisfying $f(\mathcal P e)=-f(e)$.

::: {.theorem #thm-main status="written-proof" proof="pf-main" doi="10.5281/zenodo.23935000" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s1"}
On either $\Omega_{\mathrm{all}}$ or $\Omega_{\mathrm{coll}}$, the smallest size of a sufficient admissible family is exactly three. The lower bound holds for every choice of admissible variables, and the sufficient triples of Lester, Haddadin and Gripaios, §5.1, supply the upper bound.
:::

The proof has two ingredients. The sphere argument below supplies the lower bound for every choice of variables. The sufficient triples of Lester, Haddadin and Gripaios, §5.1, supply the upper bound.

::: {.proof #pf-main}
Take a point
$$v=(s,t,d),\qquad s^2+t^2+d^2=1$$
on the unit sphere and define
$$A=\sqrt{4+t},\quad B=\sqrt{4-t},$$
$$p=(30,0,0,1),\quad q=(20,0,0,-1),$$
$$\begin{aligned}a_v&=(10+s,A,0,d),\\b_v&=(10-s,0,B,-d).\end{aligned}$$
The square roots are continuous because $4+t,4-t\ge3$. Each final momentum has energy at least $9$ and spatial norm squared at most $6$, so it is strictly future timelike; the first two are as well. Direct calculation gives
$$p^2=899,\quad q^2=399,\quad p\mathbin\cdot q=601,$$
$$(p\mathbin\cdot q)^2-p^2q^2=2500,$$
so the whole family lies in $\Omega_{\mathrm{coll}}$ and hence in $\Omega_{\mathrm{all}}$.

For chirality, suppose an allowed Lorentz transformation and pair exchanges carry $e_v$ to its parity image. Since $p^2\ne q^2$, the first pair cannot be exchanged, so the transformed $p$ and $q$ equal their parity images. Put $H=\mathcal P\Lambda$. It preserves the Minkowski form, has determinant $-1$, and fixes $p,q$. These vectors span the time–longitudinal plane because $p+q=50e_0$ and $p-30e_0=e_3$. Thus $H$ is the identity on that plane and restricts on the transverse plane to an orthogonal map $U$ with determinant $-1$.

If the second pair is fixed, its two independent transverse directions force $U$ to be the identity, contradicting its determinant. If the second pair is exchanged, the time and longitudinal coordinates give $s=d=0$, and orthogonality gives $A^2=B^2$, hence $t=0$, contradicting the unit-sphere equation. Every point $e_v$ is chiral.

Now let $R$ fix time and send
$$(x,y,z)\longmapsto(-y,-x,-z).$$
It is a proper rotation, and direct substitution gives
$$e_{-v}=R\,(ab)\,\mathcal P e_v.$$
Admissibility therefore gives $f(e_{-v})=-f(e_v)$. For two variables the map
$$F:S^2\to\mathbb R^2,\qquad F(v)=(f_1(e_v),f_2(e_v))$$
is continuous and odd. The two-dimensional Borsuk–Ulam theorem gives a point with $F(v)=0$. That event is chiral and belongs to the selected domain. For $\Omega_{\mathrm{all}}$ we restrict to the collision subdomain; for $\Omega_{\mathrm{coll}}$ we use the family directly. A one-variable obstruction follows by taking the second variable to be zero. The sufficient triples from the original paper provide the matching upper bound, completing the exact minimum statement.
:::

The odd-map form used here can also be seen directly. If $F$ never vanished, $g=F/\lVert F\rVert$ would be an odd continuous map $S^2\to S^1$. Its restriction to the closed upper hemisphere, a disk, has a continuous real lift $\theta$ for $u\mapsto e^{iu}$. On the connected equator the continuous difference $\theta(-z)-\theta(z)$ lies in $\pi+2\pi\mathbb Z$, hence is constant. Replacing $z$ by $-z$ negates that constant, so it must be zero, which is impossible in $\pi+2\pi\mathbb Z$. This is the two-dimensional case of Borsuk's theorem (reference 2, Satz II, p. 178).

::: {.theorem #thm-lower lean="D5/S3/Geometry/Lorentz/ChiralEventParityMinimality.result" mathesis="collected:chiral-event-parity-minimality:2:s1"}
For $\Omega=\Omega_{\mathrm{all}}$ or $\Omega=\Omega_{\mathrm{coll}}$, any two admissible variables have a chiral event $e\in\Omega$ with
$$f_1(e)=f_2(e)=0.$$
:::

## The sphere family as a separate lemma

::: {.lemma #lem-family status="written-proof" proof="pf-family" doi="10.5281/zenodo.23935000" source="Lemma 2 and equation (1)" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s2"}
Every $e_v$ in the displayed family is a chiral collision event; in fact all four momenta are strictly future timelike.
:::

::: {.proof #pf-family}
The calculations above prove forward-cone membership and the strict collision inequality. If an allowed map carried $e_v$ to its parity image, the unequal squared masses rule out exchanging the first pair. After composing with parity, the resulting determinant-minus-one isometry fixes $p,q$. Its transverse block either fixes two independent axes and becomes the identity, or exchanges the axes and forces $s=t=d=0$. Both cases are impossible, so every event is chiral.
:::

## Strict timelike events and completion

::: {.corollary #cor-strict status="written-proof" proof="pf-strict" doi="10.5281/zenodo.23935000" source="Corollary 3" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s3"}
The common-zero obstruction remains valid on strictly future-timelike collision events and on the collision subdomain for which a future-timelike unobserved momentum completes conservation.
:::

::: {.proof #pf-strict}
The four displayed momenta are already strictly future timelike. Set
$$\begin{aligned}k_v&=p+q-a_v-b_v,\\&=(30,-A,-B,0),\\k_v^2&=892>0.\end{aligned}$$
Thus the same family satisfies the future-timelike completion requirement. These subdomains are invariant under the allowed symmetries and parity, so the same odd-map argument applies.
:::

## More interchangeable momenta

::: {.corollary #cor-many status="written-proof" proof="pf-many" doi="10.5281/zenodo.23935000" source="Corollary 4" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s4"}
For every $n\ge2$, on the forward-cone domain of one interchangeable pair and $n$ further interchangeable momenta, any two continuous $\mathrm{SO}^{+}(1,3)\times S_2\times S_n$-invariant parity-odd real variables have a common zero on a chiral event. The same holds on the collision subclass and on the strict-timelike completion subclass.
:::

::: {.proof #pf-many}
Put $r=n-2$ and append $r$ identical markers
$c_j=((r+1)^{-1},0,0,0)$ to $e_v$. Their squared masses are at most $1$, whereas $75\le a_v^2,b_v^2\le121$, so the markers cannot be mixed with $a_v,b_v$ by an allowed map; $p,q$ remain distinguished by $899$ and $399$. Parity and $R$ fix the markers, so the antipodal identity survives. The completion momentum is
$$\begin{aligned}k_{v,r}&=(30-\tfrac{r}{r+1},-A,-B,0),\\k_{v,r}^2&=833+\frac{58r+59}{(r+1)^2}>833.\end{aligned}$$
Borsuk–Ulam gives the conclusion.
:::

## Larger permutation groups

::: {.corollary #cor-permutations status="written-proof" proof="pf-permutations" doi="10.5281/zenodo.23935000" source="Corollary 5" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s5"}
Let $N\ge4$ and let $H\le S_N$ contain the transposition of slots three and four. On $V_+^N$, any two continuous $\mathrm{SO}^{+}(1,3)\times H$-invariant parity-odd real variables have a common zero at an $H$-chiral event; the conclusion remains true when all momenta are strictly future timelike. In particular it holds for $H=S_N$ and, after relabeling, for $S_m\times S_n$ with $m,n\ge2$.
:::

::: {.proof #pf-permutations}
Use the marker family from the preceding corollary with $r=N-4$. The squared masses $899$ and $399$ distinguish $p,q$, while the pair $\{a_v,b_v\}$ remains separated from the markers. The chirality argument therefore works for all of $H$. Its transposition of slots three and four supplies the same antipodal identity, and Borsuk–Ulam finishes the proof.
:::

## Complex variables, discontinuous compression, and the labeled boundary

::: {.corollary #cor-scalar status="written-proof" proof="pf-scalar" doi="10.5281/zenodo.23935000" source="Corollary 6" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s6"}
On either four-momentum domain, a continuous invariant parity-odd complex scalar also vanishes on a chiral event. If continuity is dropped, one real variable can be sufficient.
:::

::: {.proof #pf-scalar}
Apply the main theorem to the real and imaginary parts. Conversely, given a sufficient triple $(X_1,X_2,X_3)$, return its first nonzero component, or zero when all three vanish. This function is invariant and parity odd, and its zero set is exactly the achiral set. Indeed all invariant parity-odd variables vanish on achiral events, whereas sufficiency excludes a common zero on a chiral event. The lower-bound theorem implies that this scalar is discontinuous somewhere on the sphere. The construction is already given by Lester et al., §6.1.1, equation (226).
:::

::: {.corollary #cor-labelled status="written-proof" proof="pf-labelled" doi="10.5281/zenodo.23935000" source="Corollary 7" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s7"}
For four labeled forward-causal momenta with no permutation symmetry, the continuous variable $D(e)=\det[p\ q\ a\ b]$ is sufficient; every event with at most three forward-causal momenta is achiral.
:::

::: {.proof #pf-labelled}
The determinant is Lorentz invariant and changes sign under parity. If $D\ne0$, no proper Lorentz transformation can map the labeled event to its parity image. If the span $W$ of the momenta has dimension at most three and contains a timelike vector, $W^\perp$ contains a spacelike vector; reflection in its orthogonal hyperplane fixes $W$, has determinant $-1$, and remains orthochronous because it fixes a timelike vector. Composing it with parity maps the event to its parity image. If $W$ contains no timelike vector, all nonzero forward-causal momenta lie on one null ray, since two nonparallel future-null vectors have a timelike sum; choose a spatial direction orthogonal to that ray and use the same reflection. If all momenta vanish, choose any spatial axis. Hence $D=0$ is exactly the achiral case for four labeled momenta, and every event with at most three momenta is achiral.
:::

## What the Lean proof establishes

The [Lean proof of the common-zero theorem](lean:D5/S3/Geometry/Lorentz/ChiralEventParityMinimality.result) checks the lower-bound statement on both event domains. Its variables are total functions with continuity, invariance and parity-oddness required on the chosen domain. A function defined on that domain can be extended arbitrarily outside it, so this convention gives the same mathematical assertion.

The exact minimum of three also uses the sufficient triples of Lester, Haddadin and Gripaios. The stricter domains, additional momenta, larger permutation groups and scalar/determinant boundary cases have the written proofs above. The explicit-family proof is already present among the Lean source's private helpers; the contribution request asks for a reusable public statement and for the remaining extensions.

## Coverage and sources

| Original location | Coverage in this book |
| --- | --- |
| Lester et al. §2.9 | The lower bound in the main theorem; together with the §5.1 triples, exact minimum three. |
| Lester et al. §6.1 | Continuous real/complex one-variable impossibility and the discontinuous boundary. |
| Lester et al. §2.5 | The $S_2\times S_n$ lower bound; efficiency and new-variable construction are outside scope. |
| Lester et al. §5.2.8, §5.4 | Lower bound three; exact minima for the 19- and 28-variable displays are outside scope. |
| Lester et al. §5.2.6, §5.2.7 | Parameter-dependent irreducibility and the fixed-mass $S_9$ question are outside scope. |
| Lester et al. §6.2 | We retain the cited restriction observation without claiming new independence. |

The related work of Fowler, Wang, and Lester concerns chirality measures, Euclidean tetrahedra, and scalar path obstructions. The present sphere strengthens a path obstruction to a two-component common-zero obstruction on the stated event domains.

## References

1. C. G. Lester, W. Haddadin, and B. Gripaios, “Lorentz and permutation invariants of particles III: constraining nonstandard sources of parity violation,” *International Journal of Modern Physics A* 37(16) (2022), 2250093. [doi:10.1142/S0217751X22500932](https://doi.org/10.1142/S0217751X22500932), [arXiv:2008.05206v6](https://arxiv.org/abs/2008.05206v6).
2. K. Borsuk, “Drei Sätze über die n-dimensionale euklidische Sphäre,” *Fundamenta Mathematicae* 20 (1933), 177–190. [doi:10.4064/fm-20-1-177-190](https://doi.org/10.4064/fm-20-1-177-190).
3. C. G. Lester, *Chiral Measurements* (2021), [arXiv:2111.00623v4](https://arxiv.org/abs/2111.00623v4), §3.3, Lemma 3.8.
4. P. W. Fowler, “Quantification of chirality: attempting the impossible,” *Symmetry: Culture and Science* 16(4) (2005), 321–334.
5. H. Wang, “Two-component Pseudovectoral Chirality Function for Tetrahedra” (2021), [arXiv:2103.12949v1](https://arxiv.org/abs/2103.12949v1).
6. H. Ma and W. Zhang, “The §2.9 conjecture of Lester, Haddadin and Gripaios (arXiv:2008.05206v6): three parity-odd variables are necessary,” Mathesis, version 2 (2026). [doi:10.5281/zenodo.23935000](https://doi.org/10.5281/zenodo.23935000).
