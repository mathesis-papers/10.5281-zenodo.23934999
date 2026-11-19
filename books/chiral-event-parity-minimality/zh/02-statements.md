# 精确陈述与完整证明

本章固定记号并给出完整技术论证。读者故事中说的“允许变换”是
$$G=\mathrm{SO}^{+}(1,3)\times S_2(pq)\times S_2(ab),$$
其中两次 $S_2$ 分别交换各自的一对动量。记 $x^2=x\mathbin\cdot x$，Minkowski 内积取
$$x\mathbin\cdot y=x^0y^0-x^1y^1-x^2y^2-x^3y^3.$$

## 定义与主定理

令
$$V_+=\{x\in\mathbb R^4:x^0\ge0,\ x^2\ge0\},$$
并令
$$\Omega_{\mathrm{all}}=V_+^4,$$
$$
\Omega_{\mathrm{coll}}=\{(p,q,a,b)\in\Omega_{\mathrm{all}}:
p^2q^2<(p\mathbin\cdot q)^2\}.
$$
前向锥包含零动量和零质量动量。这两个域允许质量变化，不预先要求 $p+q=a+b$。事件按顺序写为 $e=(p,q,a,b)$。宇称为
$$\mathcal P(x^0,x^1,x^2,x^3)=(x^0,-x^1,-x^2,-x^3).$$
若不存在 $g\in G$ 使 $g e=\mathcal P e$，则称 $e$ 手性。对任一 $\Omega$，可容许变量是连续于 $\Omega$ 的 $f:\Omega\to\mathbb R$，满足 $G$-不变性和 $f(\mathcal P e)=-f(e)$。

::: {.theorem #thm-main status="written-proof" proof="pf-main" doi="10.5281/zenodo.23935000" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s1"}
在 $\Omega_{\mathrm{all}}$ 和 $\Omega_{\mathrm{coll}}$ 上，充分的可容许变量族的最小大小恰好为三。下界适用于任意可容许变量；Lester、Haddadin 和 Gripaios 在 §5.1 给出的充分三元组提供上界。
:::

证明分成两部分：下面的球面论证给出适用于任意变量选择的下界；Lester、Haddadin 和 Gripaios 在 §5.1 给出的充分三元组提供上界。

::: {.proof #pf-main}
先在单位球面上取
$$v=(s,t,d),\qquad s^2+t^2+d^2=1,$$
并定义
$$A=\sqrt{4+t},\quad B=\sqrt{4-t},$$
$$p=(30,0,0,1),\quad q=(20,0,0,-1),$$
$$\begin{aligned}a_v&=(10+s,A,0,d),\\b_v&=(10-s,0,B,-d).\end{aligned}$$
连续性来自平方根在 $4+t,4-t\ge3$ 上连续。每个末动量的能量至少为 $9$，空间平方至多为 $6$，所以它们严格未来类时；前两个动量也如此。直接计算给出
$$p^2=899,\quad q^2=399,\quad p\mathbin\cdot q=601,$$
$$(p\mathbin\cdot q)^2-p^2q^2=2500,$$
故整族位于 $\Omega_{\mathrm{coll}}$，从而也位于 $\Omega_{\mathrm{all}}$。

为证手性，假设某个 $\Lambda\in\mathrm{SO}^{+}(1,3)$ 及允许交换把 $e_v$ 送到 $\mathcal P e_v$。由于 $p^2\ne q^2$，第一对不能交换，于是 $\Lambda p=\mathcal Pp,\Lambda q=\mathcal Pq$。令 $H=\mathcal P\Lambda$。它保持 Minkowski 形式、行列式为 $-1$，并固定 $p,q$。向量 $p,q$ 张成时间—纵向平面：$p+q=50e_0$ 且 $p-30e_0=e_3$。所以 $H$ 在该平面上恒等，并把横向平面保持为二维欧氏正交变换 $U$，且 $\det U=-1$。

若第二对不交换，则 $Ua_v^\perp=a_v^\perp$ 且 $Ub_v^\perp=b_v^\perp$。由于 $A,B>0$，这迫使 $Ue_1=e_1$、$Ue_2=e_2$，与 $\det U=-1$ 矛盾。若第二对交换，则时间坐标给出 $s=0$，纵向坐标给出 $d=0$，正交性给出 $A^2=B^2$，故 $t=0$；这与单位球面方程矛盾。因此每个 $e_v$ 都手性。

固定时间并令空间坐标变为 $(-y,-x,-z)$ 的旋转 $R$ 属于 $\mathrm{SO}^{+}(1,3)$。直接代入得
$$e_{-v}=R\,(ab)\,\mathcal P e_v.$$
可容许性于是给出
$$f(e_{-v})=-f(e_v).$$
对任意两个变量，映射
$$F:S^2\longrightarrow\mathbb R^2,\qquad F(v)=(f_1(e_v),f_2(e_v))$$
连续且奇。二维 Borsuk–Ulam 定理保证某个 $v$ 满足 $F(v)=0$。该 $e_v$ 同时属于所选域并且手性，于是得到共同零点。对 $\Omega_{\mathrm{all}}$，限制到碰撞子域即可；对 $\Omega_{\mathrm{coll}}$，直接使用整族。单变量情形令第二个变量恒为零即可。原论文的充分三元组给出上界三，完成精确最小性。
:::

这里使用的奇映射形式也有直接证明。若 $F$ 从不为零，归一化得到连续奇映射 $g=F/\lVert F\rVert:S^2\to S^1$。在闭上半球（一个圆盘）上，$g$ 对覆盖映射 $u\mapsto e^{iu}$ 有连续实提升 $\theta$。赤道上连续函数 $\theta(-z)-\theta(z)$ 的值属于离散集 $\pi+2\pi\mathbb Z$；由于赤道连通，它是常数。用 $-z$ 代替 $z$ 又把该常数变号，故常数只能是零，与它属于 $\pi+2\pi\mathbb Z$ 矛盾。这也是 Borsuk 定理的二维情形（参考文献 2，Satz II，第 178 页）。

::: {.theorem #thm-lower lean="D5/S3/Geometry/Lorentz/ChiralEventParityMinimality.result" mathesis="collected:chiral-event-parity-minimality:2:s1"}
对于 $\Omega=\Omega_{\mathrm{all}}$ 或 $\Omega=\Omega_{\mathrm{coll}}$，任意两个可容许变量 $f_1,f_2$ 都存在一个手性事件 $e\in\Omega$ 使
$$f_1(e)=f_2(e)=0.$$
:::

## 球面族的独立陈述

::: {.lemma #lem-family status="written-proof" proof="pf-family" doi="10.5281/zenodo.23935000" source="Lemma 2 and equation (1)" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s2"}
上式定义的每个 $e_v$ 都是碰撞域中的手性事件；事实上四个动量都严格未来类时。
:::

::: {.proof #pf-family}
前述计算给出前向性和碰撞严格不等式。若存在把 $e_v$ 送到宇称像的允许变换，第一对的不同平方质量排除交换；合成宇称后得到固定 $p,q$ 且行列式为 $-1$ 的等距变换。它在横向平面上的二维块要么固定两条独立横向轴而成为恒等，要么交换两条轴并强迫 $s=t=d=0$。两种情况都矛盾，故每个事件手性。
:::

## 严格类时与动量补全

::: {.corollary #cor-strict status="written-proof" proof="pf-strict" doi="10.5281/zenodo.23935000" source="Corollary 3" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s3"}
两变量共同零点的结论仍适用于严格未来类时碰撞域，也适用于要求一个未观测未来类时动量补全守恒的碰撞域。
:::

::: {.proof #pf-strict}
球面族中的四个动量已经严格未来类时。令
$$\begin{aligned}k_v&=p+q-a_v-b_v,\\&=(30,-A,-B,0),\\k_v^2&=892>0.\end{aligned}$$
因此同一族也满足未来类时补全。严格类时子域在允许对称和宇称下保持不变，限制同一个奇映射论证即可。
:::

## 更多可交换动量

::: {.corollary #cor-many status="written-proof" proof="pf-many" doi="10.5281/zenodo.23935000" source="Corollary 4" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s4"}
对任意 $n\ge2$，在一对可交换动量和 $n$ 个进一步可交换动量的前向锥域上，任意两个连续、$\mathrm{SO}^{+}(1,3)\times S_2\times S_n$-不变、宇称奇的实变量在某个手性事件上同时为零；碰撞子域和严格类时补全子域也满足同样结论。
:::

::: {.proof #pf-many}
令 $r=n-2$，在 $e_v$ 后附加 $r$ 个相同标记 $c_j=((r+1)^{-1},0,0,0)$。标记的平方质量不超过 $1$，而 $a_v,b_v$ 的平方质量位于 $[75,121]$，所以允许变换不能把标记与 $a_v,b_v$ 混在一起；$p,q$ 仍由 $899,399$ 唯一确定。标记由宇称和 $R$ 固定，故对跖恒等式保留。补全动量为
$$\begin{aligned}k_{v,r}&=(30-\tfrac{r}{r+1},-A,-B,0),\\k_{v,r}^2&=833+\frac{58r+59}{(r+1)^2}>833.\end{aligned}$$
同样的 Borsuk–Ulam 论证完成结论。
:::

## 更大的置换群

::: {.corollary #cor-permutations status="written-proof" proof="pf-permutations" doi="10.5281/zenodo.23935000" source="Corollary 5" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s5"}
令 $N\ge4$，且 $H\le S_N$ 含有第三、第四位置的换位。在 $V_+^N$ 上，任意两个连续的 $\mathrm{SO}^{+}(1,3)\times H$-不变宇称奇实变量，都在某个 $H$-手性事件上同时为零；即使要求所有动量严格未来类时，结论仍成立。特别地，$H=S_N$ 以及重标号后的 $S_m\times S_n$（$m,n\ge2$）都满足这一点。
:::

::: {.proof #pf-permutations}
使用上一推论的标记动量，并取 $r=N-4$。$p,q$ 的平方质量唯一，$\{a_v,b_v\}$ 与标记的平方质量分离，所以手性排除论证可用于整个 $H$。包含第三、第四位置换位保证同一个对跖恒等式，故结论随之成立。
:::

## 复变量、非连续压缩与有标签边界

::: {.corollary #cor-scalar status="written-proof" proof="pf-scalar" doi="10.5281/zenodo.23935000" source="Corollary 6" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s6"}
在两个四动量域上，连续的不变宇称奇复标量也必在某个手性事件上为零；若去掉连续性，则一个实变量可以足够。
:::

::: {.proof #pf-scalar}
把复标量的实部和虚部应用主定理即可。反之，给定一个充分三元组 $(X_1,X_2,X_3)$，返回第一个非零分量（全为零时返回零）。这个函数保持不变性并且宇称奇。所有不变且宇称奇的变量在非手性事件上必为零，而充分性排除了手性事件上的共同零点，所以它的零集恰好是非手性事件。下界定理说明，这个单变量在球面上的某处必不连续。这个构造来自 Lester 等 §6.1.1 的式 (226)。
:::

::: {.corollary #cor-labelled status="written-proof" proof="pf-labelled" doi="10.5281/zenodo.23935000" source="Corollary 7" request="https://github.com/the-omega-institute/trureturing-requests/issues/124" mathesis="collected:chiral-event-parity-minimality:2:s7"}
对于四个有标签、无置换对称的未来因果动量，连续变量 $D(e)=\det[p\ q\ a\ b]$ 足够；至多三个未来因果动量的每个事件都非手性。
:::

::: {.proof #pf-labelled}
行列式在 保定向、保时向的洛伦兹变换下不变、在宇称下变号。若 $D\ne0$，标签固定时不可能把事件送到宇称像。若张成子空间含有类时向量且维数至多三，则其正交补含有类空向量；关于该向量的反射固定原子空间，行列式为 $-1$ 且保持时间方向，和宇称合成即可得到允许变换。若没有类时向量，所有非零未来因果动量位于同一条零射线上（两条不平行的未来零向量之和会类时）；再选一个与该零射线正交的纯空间方向作同样反射；若所有动量都为零，就任选一个空间轴。于是 $D=0$ 恰好意味着非手性，而三个或更少动量总是非手性。
:::

## Lean 证明覆盖哪些内容

[共同零点定理的 Lean 证明](lean:D5/S3/Geometry/Lorentz/ChiralEventParityMinimality.result)检验了两个事件域上的下界。Lean 中的变量定义在整个事件空间上，但连续性、不变性与宇称奇性都只要求在所选域内成立。域上的函数可以任意延拓到域外，因此两种写法表达相同的数学结论。

精确最小数目为三，还使用了 Lester、Haddadin 和 Gripaios 的充分三元组。严格子域、更多动量、更大置换群以及标量和行列式边界，均保留上面的书面证明。显式球面族的证明已经存在于 Lean 源码的私有辅助定理中；贡献请求希望将其整理成可复用的公开陈述，并补齐其余推广。

## 覆盖范围与来源

| 原文位置 | 本书覆盖 |
| --- | --- |
| Lester 等 §2.9 | 主定理的三变量下界；结合 §5.1 三元组得到精确最小三。 |
| Lester 等 §6.1 | 连续实/复单变量不可能；非连续压缩的边界。 |
| Lester 等 §2.5 | $S_2\times S_n$ 的三变量下界；效率与新变量构造未涉及。 |
| Lester 等 §5.2.8、§5.4 | 三变量下界；十九/二十八变量的精确最小性未涉及。 |
| Lester 等 §5.2.6、§5.2.7 | 未涉及参数依赖不可约性和固定质量 $S_9$。 |
| Lester 等 §6.2 | 只保留原文关于限制的说明，不宣称新的独立性。 |

原论文与 Fowler、Wang、Lester 的相关工作分别讨论手性量化、欧氏四面体和连续标量路径障碍；本结果把路径障碍提升为二维球面上的两分量共同零点。

## 参考文献

1. C. G. Lester, W. Haddadin, and B. Gripaios, “Lorentz and permutation invariants of particles III: constraining nonstandard sources of parity violation,” *International Journal of Modern Physics A* 37(16) (2022), 2250093. [doi:10.1142/S0217751X22500932](https://doi.org/10.1142/S0217751X22500932), [arXiv:2008.05206v6](https://arxiv.org/abs/2008.05206v6).
2. K. Borsuk, “Drei Sätze über die n-dimensionale euklidische Sphäre,” *Fundamenta Mathematicae* 20 (1933), 177–190. [doi:10.4064/fm-20-1-177-190](https://doi.org/10.4064/fm-20-1-177-190).
3. C. G. Lester, *Chiral Measurements* (2021), [arXiv:2111.00623v4](https://arxiv.org/abs/2111.00623v4), §3.3, Lemma 3.8.
4. P. W. Fowler, “Quantification of chirality: attempting the impossible,” *Symmetry: Culture and Science* 16(4) (2005), 321–334.
5. H. Wang, “Two-component Pseudovectoral Chirality Function for Tetrahedra” (2021), [arXiv:2103.12949v1](https://arxiv.org/abs/2103.12949v1).
6. H. Ma and W. Zhang, “The §2.9 conjecture of Lester, Haddadin and Gripaios (arXiv:2008.05206v6): three parity-odd variables are necessary,” Mathesis, version 2 (2026). [doi:10.5281/zenodo.23935000](https://doi.org/10.5281/zenodo.23935000).
