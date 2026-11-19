# An invisible left and right

Imagine a detector recording a handful of particles. Each particle is a four-vector: the first coordinate is energy, and the other three are spatial momentum. Reverse all spatial directions and you obtain the **parity image**. Some events can be brought back to their image by an allowed Lorentz transformation or by exchanging particles that are declared interchangeable. Others cannot. These are **chiral events**: like a left hand and a right hand, they have a genuine handedness.

A useful way to think about the proposed variables is as a bank of measuring needles. A left-handed event and its mirror must push every needle in opposite directions. A reading of zero is allowed for an individual needle; the requirement is that the needles never all read zero on an event that really has handedness. One successful set has three needles. The question asks whether a clever redesign could always get by with two.

Continuity means that a tiny change in the recorded momenta makes only a tiny change in each reading. In one dimension, a continuous reading that goes from positive to negative must pass through zero. Two readings can avoid a common zero along a single path: the pair can travel around the origin in a circle. The construction below closes that escape by providing an entire sphere of chiral events, with opposite points required to give opposite pairs of readings. Borsuk–Ulam is the precise two-dimensional statement that these readings cannot all avoid the origin.

We measure energy and momentum in units where the speed of light is one. For a particle recorded as $(E,x,y,z)$, the quantity $E^2-x^2-y^2-z^2$ is its squared mass. The allowed momenta have $E\geq0$ and $E^2\geq x^2+y^2+z^2$; they are called future-causal. Strict inequality describes the strictly future-timelike case used by our construction. For example, $(30,0,0,1)$ has squared mass $30^2-1^2=899$.

Different inertial observers may record different energies and spatial momenta for the same event. The Lorentz transformations allowed here preserve squared mass, the orientation of space-time and the direction of time. A useful handedness reading must agree for all these observers. It must also ignore exchanging the two members of either declared interchangeable pair. Mirroring every spatial momentum is a different operation: that is the parity change under which the reading must reverse sign.

Lester, Haddadin, and Gripaios asked how to assign numbers that record this handedness. The original manuscript is archived as [version 2, DOI 10.5281/zenodo.23935000](https://doi.org/10.5281/zenodo.23935000). An admissible variable must

- change continuously when the event changes slightly;
- stay fixed under the allowed Lorentz transformations and the two pair exchanges;
- change sign under parity.

A sufficient collection of variables should never vanish simultaneously on a chiral event. Their §2.9 question was whether the three variables in §5.1 are the smallest possible collection for four-momentum events with two interchangeable pairs.

The answer is yes, with a useful separation of evidence. We prove that any two admissible variables vanish together on some chiral event, so at least three are needed. The triples displayed in the earlier paper supply the matching upper bound, so the exact minimum is three. The first assertion is the lower bound checked by Lean; the second uses the cited sufficiency construction from the original paper.

## A concrete four-momentum family

Let
$$v=(s,t,d),\qquad s^2+t^2+d^2=1$$
run over the unit sphere. For each point set
$$
\begin{aligned}
p&=(30,0,0,1),\quad q=(20,0,0,-1),\\
a_v&=(10+s,\sqrt{4+t},0,d),\\
b_v&=(10-s,0,\sqrt{4-t},-d).
\end{aligned}
$$

The three sphere coordinates are stored in the energies, transverse lengths, and longitudinal components of the last two momenta. Since $-1\le s,t,d\le1$, all four momenta are strictly future timelike. The first pair satisfies
$$p^2=899,\qquad q^2=399,\qquad p\mathbin\cdot q=601,$$
and hence
$$
(p\mathbin\cdot q)^2-p^2q^2=2500>0.
$$
Every point of the sphere is therefore in the collision domain.

::: {.film src="001-antipodal-sphere"}
A focused explanation of how the sphere encodes events, how parity becomes the antipodal map, and why Borsuk–Ulam forces a simultaneous zero.
:::

## Why every point remains chiral

Suppose an allowed Lorentz transformation carries one of these events to its parity image. The squared masses of $p$ and $q$ are $899$ and $399$, so the first pair cannot be exchanged; the Lorentz transformation must take each to its own parity image. Composing the Lorentz transformation with parity gives an isometry $H$ of determinant $-1$ fixing $p$ and $q$. Those two vectors span the time–longitudinal plane, so $H$ restricts on the transverse plane to a two-dimensional orthogonal map of determinant $-1$.

If $a_v$ and $b_v$ are also fixed, their independent transverse directions force that restriction to be the identity, whose determinant is $+1$, a contradiction. If the last pair is exchanged, comparing time and longitudinal coordinates gives $s=d=0$, while comparing transverse lengths gives $t=0$, contradicting $s^2+t^2+d^2=1$. Thus every point of the sphere is chiral.

## Antipodes from parity and a permitted symmetry

Let $R$ fix time and send
$$(x,y,z)\longmapsto(-y,-x,-z).$$
It is a proper rotation. A direct substitution gives
$$e_{-v}=R\,(ab)\,\mathcal P e_v.$$

Therefore every admissible variable obeys
$$f(e_{-v})=-f(e_v).$$
Two variables combine into the continuous odd map
$$F(v)=(f_1(e_v),f_2(e_v))$$
from the two-sphere to the plane.

The two-dimensional Borsuk–Ulam theorem says that a continuous odd map from the sphere to the plane has a zero. Opposite points must receive opposite readings, and continuity prevents all readings from avoiding the origin. Hence some $v$ satisfies
$$f_1(e_v)=f_2(e_v)=0.$$
The event $e_v$ is chiral, so two variables cannot be sufficient.

## Boundary cases and exact scope

The same sphere is strictly future timelike, and
$$\begin{aligned}k_v&=p+q-a_v-b_v,\\&=(30,-\sqrt{4+t},-\sqrt{4-t},0),\\k_v^2&=892.\end{aligned}$$
so it also satisfies the narrower requirement that an unobserved future-timelike momentum completes conservation. Appending several tiny identical timelike markers gives the versions with more interchangeable momenta; a permutation subgroup containing a suitable transposition gives the same antipodal argument.

Those extensions are written corollaries, not automatic consequences of the Lean proof. In the opposite boundary case—four **labeled** momenta with no permutation symmetry—the single continuous variable
$$D(e)=\det[p\ q\ a\ b]$$
is sufficient, and every event with at most three forward-causal momenta is achiral. Thus “three are necessary” depends on continuity and exchange symmetry.

If continuity is dropped, one may return the first nonzero component of a sufficient triple. Its zero set is exactly the achiral set: every parity-odd invariant is zero on an achiral event, while sufficiency prevents a simultaneous zero on a chiral event. The resulting scalar must be discontinuous somewhere on the constructed sphere, by the lower bound. The topological obstruction concerns continuous compression, not arbitrary set-theoretic encodings.

::: {.slides src="parity-minimality"}
Academic slides follow the same chain from the sphere construction to the Borsuk–Ulam zero, and separate the Lean-covered lower bound from written corollaries.
:::

## What to remember

The result turns “at least three” from an observation about one displayed triple into a theorem about **every** continuous, invariant, parity-odd choice of variables. The reusable strategy is:

1. build a sphere made entirely of chiral objects;
2. arrange for parity plus an allowed symmetry to act as the antipodal map;
3. turn any two readings into a continuous odd map;
4. invoke Borsuk–Ulam to force a common zero.

The next chapter, [Exact statements and proofs](02-statements.md), gives the full definitions, proofs, boundary cases, and source comparison.
