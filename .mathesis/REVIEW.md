# Statement comparison

| Book result | Verdict | Compared public declaration | Comparison commit | Scope |
| --- | --- | --- | --- | --- |
| `thm-main` | special case | `D5/S3/Geometry/Lorentz/ChiralEventParityMinimality.result` | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Exact minimum adds the cited sufficient triples. |
| `thm-lower` | same | `D5/S3/Geometry/Lorentz/ChiralEventParityMinimality.result` | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Exact two-variable common-zero lower bound. |
| `lem-family` | none | — | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Private helper family; no frozen public declaration. |
| `cor-strict` | none | — | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Strict-timelike and completion extension; no frozen public declaration. |
| `cor-many` | none | — | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Additional interchangeable momenta; no frozen public declaration. |
| `cor-permutations` | none | — | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | General permutation subgroup; no frozen public declaration. |
| `cor-scalar` | none | — | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Complex/discontinuous boundary; no frozen public declaration. |
| `cor-labelled` | none | — | `8a24ea4e79de962725aab9d9b49cc605fcc211d8` | Labeled determinant/reflection boundary; no frozen public declaration. |

The pinned declaration is exact for the two-admissible-variable common-zero lower bound on allEvents and collisionEvents. The catalog node also records the consequence “at least three” and the cited sufficient triples; those upper-bound and exact-minimum clauses are supplied by the paper and are not conclusions of the Lean declaration, so thm-main is recorded as a special case. The broader written corollaries have no matching frozen public declaration at this pin. The operator compared the module bytes at the manuscript pin 50f2a97bb5e704842f2c32c6095f68a0dc62c779 and the book pin 8a24ea4e79de962725aab9d9b49cc605fcc211d8; they are identical.
